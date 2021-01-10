const fs = require('fs').promises;

/**
 * Checking for file exists.
 *
 * @param {string} path - The path to file/folder.
 *
 * @returns {Promise<boolean>}
 */
async function isExists(path) {
  try {
    await fs.stat(path);

    return true;
  } catch {
    return false;
  }
}

module.exports = {
  isExists,
};
