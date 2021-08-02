const loaderCSS = require('../loaders/css');
const loaderStyle = require('../loaders/style');
const loaderBabel = require('../loaders/babel');
const loaderLinaria = require('../loaders/linaria');

const { isProduction } = require('../../config/env');
const { getFilename } = require('../utils');

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
      test: /\.(jpe?g|png|gif|ico)$/,
      type: 'asset',
    },
    {
      test: /\.mp4$/,
      type: 'asset',
      generator: {
        filename: getFilename(isProduction, 'video'),
      },
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      type: 'asset',
      generator: {
        filename: getFilename(isProduction, 'fonts'),
      },
    },
  ],
};
