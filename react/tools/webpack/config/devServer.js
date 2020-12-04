/**
 * @docs: https://webpack.js.org/configuration/dev-server/
 */

const { webpackEnv } = require('../../config/env');

module.exports = {
  hot: true,
  port: webpackEnv.DEV_SERVER_PORT,
  open: true,
  host: webpackEnv.DEV_SERVER_HOST,
  compress: true,
  historyApiFallback: true,
};
