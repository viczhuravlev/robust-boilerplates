const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env, options) => {
  const isDevelopment = options.mode !== 'production';

  return {
    mode: isDevelopment ? 'development' : 'production',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/build'),
      filename: isDevelopment ? 'js/[name].js' : 'js/[name].[contenthash:8].js',
      publicPath: '/',
      assetModuleFilename: 'images/[hash][ext]',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x)?$/,
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
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
      ],
    },
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : 'nosources-source-map',
    optimization: {
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
    },
    performance: {
      hints: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        minify: isDevelopment
          ? false
          : {
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
              removeComments: true,
              useShortDoctype: true,
              keepClosingSlash: true,
              collapseWhitespace: true,
              removeEmptyAttributes: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
            },
        title: 'Robust React Application',
        template: `./src/static/index.${isDevelopment ? 'dev' : 'production'}.html`,
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      }),
      ...(isDevelopment
        ? [
            new ForkTsCheckerWebpackPlugin({
              typescript: {
                diagnosticOptions: {
                  semantic: true,
                  syntactic: true,
                },
              },
            }),
          ]
        : [
            new CompressionPlugin(),
            new CompressionPlugin({
              algorithm: 'brotliCompress',
              compressionOptions: { level: 11 },
              filename: '[path][base].br',
              test: /\.(js|css|html|svg)$/,
            }),
          ]),
      ...(isDevelopment ? [new webpack.HotModuleReplacementPlugin()] : []),
    ],
    stats: {
      hash: false,
      errors: true,
      builtAt: false,
      modules: false,
      timings: false,
      children: false,
      assetsSort: '!size',
      entrypoints: false,
      errorDetails: true,
    },
    devServer: {
      hot: true,
      port: 8586,
      open: true,
      host: '0.0.0.0',
      compress: true,
      historyApiFallback: true,
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: true,
    },
  };
};
