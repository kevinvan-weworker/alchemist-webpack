const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtrctPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');

const settings = require('./settings');
const common = require('./webpack.common.js');

const root = path.resolve(__dirname, '..', 'src');

const commonHtmlWebpackOpts = {
  inject: 'body',
  cache: true,
  minify: {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
  }
};

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    chunkFilename: 'js/[name].[chunkhash:6].js',
    filename: 'js/[name].[chunkhash:6].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtrctPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APP_ENV: JSON.stringify('production'),
        SETTINGS: JSON.stringify(settings.production)
      },
    }),
    new MiniCssExtrctPlugin({
      chunkFilename: 'css/[name].[chunkhash:6].css',
      filename: 'css/[name].[chunkhash:6].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${root}/templates/index.html`,
      ...commonHtmlWebpackOpts
    })
  ]
});