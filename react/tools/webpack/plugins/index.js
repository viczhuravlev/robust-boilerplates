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
const pluginDuplicatePackageChecker = require('./duplicatePackageChecker');

module.exports = [
  isProduction && pluginClean,
  pluginDefine,
  pluginHtml,
  isProduction && pluginMiniCssExtract,
  isProduction && pluginCompression,
  !isProduction && pluginHot,
  !isProduction && pluginForkTsChecker,
  !isProduction && pluginCircularDependency,
  !isProduction && pluginDuplicatePackageChecker,
  webpackEnv.BUNDLE_ANALYZER === 'true' && pluginAnalyzer,
].filter(Boolean);
