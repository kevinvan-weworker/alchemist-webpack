const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APP_ENV: JSON.stringify('production'),
        SETTINGS: JSON.stringify(settings.production)
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${root}/templates/index.html`,
      ...commonHtmlWebpackOpts
    })
  ]
});