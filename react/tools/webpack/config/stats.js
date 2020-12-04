/**
 * @docs: https://webpack.js.org/configuration/stats/
 */

module.exports = {
  hash: false,
  errors: true,
  builtAt: false,
  modules: false,
  timings: false,
  children: false,
  assetsSort: '!size',
  entrypoints: false,
  errorDetails: true,
};
