const path = require('path');

const { rootPath } = require('./paths');

const result = require('dotenv').config({ path: path.resolve(rootPath, '.env') });

if (result.error) {
  throw new Error(`🔥 🔥 🔥 [Couldn't find .env file]: ${result.error.message}️`);
}

const { NODE_ENV } = process.env;

/**
 * Application-only variables
 */
const appEnv = {
  NODE_ENV,

  SERVER_URL: process.env.SERVER_URL,
};

/**
 * Webpack-only variables
 */
const webpackEnv = {
  NODE_ENV,
  PUBLIC_URL: process.env.PUBLIC_URL,

  DEV_SERVER_HOST: process.env.DEV_SERVER_HOST,
  DEV_SERVER_PORT: process.env.DEV_SERVER_PORT,

  BUNDLE_ANALYZER: process.env.BUNDLE_ANALYZER,
  BUNDLE_ANALYZER_HOST: process.env.BUNDLE_ANALYZER_HOST,
  BUNDLE_ANALYZER_PORT: process.env.BUNDLE_ANALYZER_PORT,
};

/**
 * Check all env
 */
function checkVariablesFull(env) {
  const emptyKeys = [];

  Object.keys(env).forEach((key) => {
    if (!env[key]) {
      emptyKeys.push(key);
    }
  });

  if (emptyKeys.length > 0) {
    throw new Error(`${emptyKeys.join(', ')} is required.`);
  }
}

checkVariablesFull({
  ...appEnv,
  ...webpackEnv,
});

module.exports = {
  appEnv,
  webpackEnv,
  isProduction: NODE_ENV === 'production',
  isDevelopment: NODE_ENV !== 'production',
};
