/**
 * @docs: https://webpack.js.org/plugins/html-webpack-plugin/
 */
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const { sourcePath, templatesPath } = require('../../config/paths');
const { isProduction, webpackEnv } = require('../../config/env');

const minifyConfig = {
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  removeComments: true,
  useShortDoctype: true,
  keepClosingSlash: true,
  collapseWhitespace: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

module.exports = new HtmlPlugin({
  title: 'Robust React Application',
  minify: isProduction ? minifyConfig : false,
  favicon: path.resolve(sourcePath, './static/images/favicon.png'),
  template: path.resolve(templatesPath, `./index.${webpackEnv.NODE_ENV}.html`),
});
