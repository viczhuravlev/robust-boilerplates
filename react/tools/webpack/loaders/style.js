/**
 * @docs: https://github.com/webpack-contrib/style-loader
 * @docs: https://github.com/webpack-contrib/mini-css-extract-plugin
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProduction } = require('../../config/env');

module.exports = {
  loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
};
