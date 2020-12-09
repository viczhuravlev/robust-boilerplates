/**
 * @docs: https://github.com/babel/babel-loader
 */

const babelConfig = require('../babel.config.json');

module.exports = {
  loader: 'babel-loader',
  options: { cacheDirectory: true, ...babelConfig },
};
