const { isProduction, webpackEnv } = require('../config/env');

const pluginHot = require('./plugins/hot');
const pluginHtml = require('./plugins/html');
const pluginClean = require('./plugins/clean');
const pluginDefine = require('./plugins/define');
const pluginAnalyzer = require('./plugins/analyzer');
const pluginCompression = require('./plugins/compression');
const pluginForkTsChecker = require('./plugins/forkTsChecker');
const pluginMiniCssExtract = require('./plugins/miniCssExtract');
const pluginCircularDependency = require('./plugins/circularDependency');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  target: 'web',
  devtool: require('./config/devtool'),
  entry: require('./config/entry'),
  output: require('./config/output'),
  module: require('./config/module'),
  plugins: [
    isProduction && pluginClean,
    pluginDefine,
    pluginHtml,
    isProduction && pluginMiniCssExtract,
    isProduction && pluginCompression,
    !isProduction && pluginHot,
    !isProduction && pluginForkTsChecker,
    !isProduction && pluginCircularDependency,
    webpackEnv.BUNDLE_ANALYZER === 'true' && pluginAnalyzer,
  ].filter(Boolean),
  stats: require('./config/stats'),
  resolve: require('./config/resolve'),
  devServer: require('./config/devServer'),
  performance: require('./config/performance'),
  optimization: require('./config/optimization'),
  watchOptions: require('./config/watchOptions'),
};
