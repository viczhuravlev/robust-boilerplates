const { isProduction, webpackEnv } = require('../../config/env');

const pluginHot = require('./hot');
const pluginHtml = require('./html');
const pluginClean = require('./clean');
const pluginDefine = require('./define');
const pluginAnalyzer = require('./analyzer');
const pluginCompression = require('./compression');
const pluginForkTsChecker = require('./forkTsChecker');
const pluginMiniCssExtract = require('./miniCssExtract');
const pluginCircularDependency = require('./circularDependency');

module.exports = [
  isProduction && pluginClean,
  pluginDefine,
  pluginHtml,
  isProduction && pluginMiniCssExtract,
  isProduction && pluginCompression,
  !isProduction && pluginHot,
  !isProduction && pluginForkTsChecker,
  !isProduction && pluginCircularDependency,
  webpackEnv.BUNDLE_ANALYZER === 'true' && pluginAnalyzer,
].filter(Boolean);
