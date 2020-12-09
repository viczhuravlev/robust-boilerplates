/**
 * @docs: https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md
 */

const { isProduction } = require('../../config/env');

const babelConfig = require('../babel.config.json');

module.exports = {
  loader: 'linaria/loader',
  options: {
    sourceMap: !isProduction,
    babelOptions: babelConfig,
  },
};
