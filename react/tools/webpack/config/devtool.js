/**
 * @docs: https://webpack.js.org/configuration/devtool
 */

const { isProduction } = require('../../config/env');

module.exports = isProduction ? 'nosources-source-map' : 'eval-cheap-module-source-map';
