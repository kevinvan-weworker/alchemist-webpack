const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');

const settings = require('./settings');
const production = require('./webpack.production');

module.exports = merge(
  {
    plugins: [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('staging'),
          APP_ENV: JSON.stringify('staging'),
          SETTINGS: JSON.stringify(settings.staging),
        },
      }),
    ],
  },
  production
);