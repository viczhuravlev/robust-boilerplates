/**
 * @docs: https://webpack.js.org/plugins/define-plugin
 */

const webpack = require('webpack');

const { appEnv } = require('../../config/env');

function getEnvForDefine(appEnv) {
  const env = {};

  Object.keys(appEnv).forEach((key) => {
    env[key] = JSON.stringify(appEnv[key]);
  });

  return env;
}

module.exports = new webpack.DefinePlugin({ 'process.env': getEnvForDefine(appEnv) });
