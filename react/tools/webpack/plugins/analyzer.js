/**
 * @docs: https://github.com/webpack-contrib/webpack-bundle-analyzer
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { webpackEnv } = require('../../config/env');

module.exports = new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerHost: webpackEnv.BUNDLE_ANALYZER_HOST,
  analyzerPort: webpackEnv.BUNDLE_ANALYZER_PORT,
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  openAnalyzer: false,
  generateStatsFile: false,
  statsFilename: 'stats.json',
  statsOptions: null,
  logLevel: 'silent',
});
