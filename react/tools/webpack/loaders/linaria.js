/**
 * @docs: https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md
 */

const { isProduction } = require('../../config/env');

const babelOptions = require('../babel.config.json');

module.exports = {
  loader: '@linaria/webpack-loader',
  options: {
    sourceMap: !isProduction,
    babelOptions,
  },
};
