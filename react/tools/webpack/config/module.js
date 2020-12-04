const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProduction } = require('../../config/env');

module.exports = {
  rules: [
    {
      test: /\.(js(x)?|ts(x)?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: !isProduction,
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: !isProduction,
          },
        },
      ],
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
