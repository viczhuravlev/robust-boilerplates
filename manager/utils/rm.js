const fs = require('fs').promises;
const path = require('path');

const defaultOptions = {
  isSaveMainDir: false,
};

/**
 * Recursive folder deletion.
 *
 * @param {string} dir - full path to dir
 * @param {object} options - see default settings
 *
 * @returns {Promise<void>}
 */
async function rmDir(dir, options) {
  const { isSaveMainDir } = { ...defaultOptions, ...options };

  const files = await fs.readdir(dir, { withFileTypes: true });

  for (let i = 0; i < files.length; i++) {
    const currentFile = files[i];
    const currentPathFile = path.join(dir, currentFile.name);

    if (currentFile.isDirectory()) {
      await rmDir(currentPathFile);
    } else {
      await fs.unlink(currentPathFile);
    }
  }

  if (!isSaveMainDir) {
    await fs.rmdir(dir);
  }
}

module.exports = {
  rmDir,
};
