/**
 * @docs: https://github.com/webpack-contrib/css-loader
 */

const { isProduction } = require('../../config/env');

module.exports = {
  loader: 'css-loader',
  options: {
    sourceMap: !isProduction,
  },
};
