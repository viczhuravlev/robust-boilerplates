/**
 * @docs: https://webpack.js.org/configuration/optimization
 */

module.exports = {
  runtimeChunk: {
    name: 'runtime',
  },
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

          return `vendor.${packageName.replace('@', '')}`;
        },
      },
    },
  },
};
