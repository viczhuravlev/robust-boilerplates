const fs = require('fs');
const path = require('path');
const fsAsync = require('fs').promises;

const { isExists } = require('./helpers');

/**
 * Copy file
 *
 * @param {string} src - full path to the current file
 * @param {string} dest - new full path to current file
 */
function copy(src, dest) {
  const oldFile = fs.createReadStream(src);
  const newFile = fs.createWriteStream(dest);

  oldFile.pipe(newFile);
}

/**
 * Recursive folder creation
 *
 * @param {string} src - full path to the current folder
 * @param {string} dest - new full path to current file
 *
 * @returns {Promise<void>}
 */
async function copyDir(src, dest) {
  let isExistsDir = await isExists(dest);

  if (!isExistsDir) {
    await fsAsync.mkdir(dest);
  }

  const files = await fsAsync.readdir(src, {
    withFileTypes: true,
  });

  for (let i = 0; i < files.length; i++) {
    const currentFile = files[i];
    const currentFilePath = path.join(src, currentFile.name);
    const newFilePath = path.join(dest, currentFile.name);

    if (currentFile.isDirectory()) {
      await copyDir(currentFilePath, newFilePath);
    } else if (currentFile.isSymbolicLink()) {
      const symlink = await fsAsync.readlink(currentFilePath);

      await fsAsync.symlink(symlink, newFilePath);
    } else {
      copy(currentFilePath, newFilePath);
    }
  }
}

module.exports = {
  copyDir,
};
