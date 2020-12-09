const loaderCSS = require('../loaders/css');
const loaderStyle = require('../loaders/style');
const loaderBabel = require('../loaders/babel');
const loaderLinaria = require('../loaders/linaria');

module.exports = {
  rules: [
    {
      test: /\.(js(x)?|ts(x)?)$/,
      exclude: /node_modules/,
      use: [loaderBabel, loaderLinaria],
    },
    {
      test: /\.css$/,
      use: [loaderStyle, loaderCSS],
    },
    {
      test: /\.woff2$/,
      type: 'asset',
      generator: {
        filename: 'fonts/[hash][ext]',
      },
    },
    {
      test: /\.(jpe?g|png|gif|ico)$/,
      type: 'asset',
    },
  ],
};
