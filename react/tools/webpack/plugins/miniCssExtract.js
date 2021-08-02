/**
 * @docs: https://github.com/webpack-contrib/mini-css-extract-plugin
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { getFilename } = require('../utils');

const { isProduction } = require('../../config/env');

module.exports = new MiniCssExtractPlugin({
  filename: getFilename(isProduction, 'css', 'css'),
});
