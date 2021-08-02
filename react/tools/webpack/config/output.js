/**
 * @docs: https://webpack.js.org/concepts/output
 */

const { buildPath } = require('../../config/paths');
const { isProduction, webpackEnv } = require('../../config/env');

const { getFilename } = require('../utils');

module.exports = {
  path: buildPath,
  filename: getFilename(isProduction, 'js', 'js'),
  publicPath: webpackEnv.PUBLIC_URL,
  assetModuleFilename: getFilename(isProduction, 'images'),
};
