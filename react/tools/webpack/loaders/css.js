/**
 * @docs: https://github.com/webpack-contrib/css-loader
 */

const { isDevelopment } = require('../../config/env');

module.exports = {
  loader: 'css-loader',
  options: {
    sourceMap: isDevelopment,
  },
};
