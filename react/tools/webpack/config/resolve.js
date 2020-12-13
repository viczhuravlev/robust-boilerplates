/**
 * @docs: https://webpack.js.org/configuration/resolve
 */

const path = require('path');

const { rootPath, sourcePath } = require('../../config/paths');

module.exports = {
  alias: {
    '@': sourcePath,
  },
  modules: [sourcePath, path.resolve(rootPath, 'node_modules')],
  extensions: ['.js', '.ts', '.jsx', '.tsx'],
};
