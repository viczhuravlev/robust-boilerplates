const fs = require('fs').promises;
const path = require('path');

const config = require('./config');

const { rmDir } = require('./utils/rm');
const { copyDir } = require('./utils/copy');
const { mergeTsConfig } = require('./utils/merge');

/**
 * Get all boilerplates.
 *
 * @returns {Promise<Dirent>} - Dirent = https://nodejs.org/api/fs.html#fs_class_fs_dirent
 */
async function getBoilerplates() {
  const files = await fs.readdir(config.ROOT_PATH, { withFileTypes: true });

  const boilerplates = files.filter(
    (data) =>
      !config.EXCLUDED_FOLDERS.includes(data.name) && data.name[0] !== '.' && data.isDirectory(),
  );

  return boilerplates;
}

/**
 * Copy the selected boilerplate
 *
 * @param {string} name - The name of selected boilerplate
 *
 * @returns {Promise<void>}
 */
async function createBoilerplate(name) {
  await copyDir(path.join(config.ROOT_PATH, name), path.join(config.ROOT_PATH));
}

/**
 * Remove all boilerplates
 *
 * @param {array} boilerplates - All boilerplates names
 *
 * @returns {Promise<void>}
 */
async function removeBoilerplates(boilerplates) {
  await Promise.all(
    boilerplates.map((boilerplate) => rmDir(path.join(config.ROOT_PATH, boilerplate.name))),
  );
}

/**
 * Boilerplate preparation + remove unnecessary files
 *
 * @param {string} boilerplate - The name of selected boilerplate
 * @param {boolean} isEmpty - flag to control empty code
 *
 * @returns {Promise<void>}
 */
async function boilerplatePreparation(boilerplate, isEmpty) {
  switch (boilerplate) {
    case 'react': {
      await mergeTsConfig();

      break;
    }
  }

  if (isEmpty) {
    await rmDir(path.join(config.ROOT_PATH, 'src'), { isSaveMainDir: true });
  }

  const unnecessaryFiles = config.UNNECESSARY_FILES[boilerplate];

  if (unnecessaryFiles) {
    await Promise.all(unnecessaryFiles.map((file) => fs.unlink(path.join(config.ROOT_PATH, file))));
  }
}

module.exports = {
  getBoilerplates,
  createBoilerplate,
  removeBoilerplates,
  boilerplatePreparation,
};
