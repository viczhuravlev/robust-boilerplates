/**
 * @docs: https://webpack.js.org/configuration/entry-context
 */

const path = require('path');

const { sourcePath } = require('../../config/paths');

module.exports = {
  app: path.resolve(sourcePath, 'index.tsx'),
};
