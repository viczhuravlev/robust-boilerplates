const { isProduction } = require('../config/env');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: require('./config/devtool'),
  entry: require('./config/entry'),
  output: require('./config/output'),
  module: require('./config/module'),
  plugins: require('./plugins'),
  stats: require('./config/stats'),
  resolve: require('./config/resolve'),
  devServer: require('./config/devServer'),
  performance: require('./config/performance'),
  optimization: require('./config/optimization'),
  watchOptions: require('./config/watchOptions'),
};
