/**
 * @docs: https://github.com/webpack-contrib/compression-webpack-plugin
 */

const CompressionPlugin = require('compression-webpack-plugin');

module.exports = new CompressionPlugin({
  test: /\.(js|css|html|svg)$/,
  filename: '[path][base].br',
  algorithm: 'brotliCompress',
  compressionOptions: { level: 11 },
});
