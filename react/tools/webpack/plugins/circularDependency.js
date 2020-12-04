/**
 * @docs: https://github.com/aackerman/circular-dependency-plugin
 */

const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = new CircularDependencyPlugin({
  cwd: process.cwd(),
  exclude: /node_modules/,
  failOnError: true,
  allowAsyncCycles: false,
});
