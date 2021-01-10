const path = require('path');

module.exports = {
  ROOT_PATH: path.join(__dirname, '..'),

  EXCLUDED_FOLDERS: ['node_modules', 'manager'],

  UNNECESSARY_FILES: {
    native: ['tsconfig-base.json'],
    react: ['tsconfig-base.json'],
  },
};
