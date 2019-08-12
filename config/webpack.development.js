const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

const settings = require('./settings');
const common = require('./webpack.common.js');
const root = path.resolve(__dirname, '..', 'src');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    port: 1337,
    hot: true
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        APP_ENV: JSON.stringify('development'),
        SETTINGS: JSON.stringify(settings.development)
      },
    }),
    new HtmlWebpackPlugin({
      template: `${root}/templates/index.development.html`,
    }),
    new HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
});   