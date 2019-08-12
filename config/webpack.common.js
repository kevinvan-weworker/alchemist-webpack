const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const root = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: `${root}/index.tsx`,
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    pathinfo: false,
  },
  resolve: {
    alias: {
      assets: `${root}/assets`,
      components: `${root}/components`,
      configs: `${root}/configs`,
      HOCs: `${root}/HOCs`,
      networking: `${root}/networking`,
      pages: `${root}/pages`,
      styles: `${root}/styles`,
      utils: `${root}/utils`
    },
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|eot|woff|ttf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  // plugins: [
  //   new CleanWebpackPlugin({
  //     cleanOnceBeforeBuildPatterns: [
  //       '**/*',
  //       path.join(process.cwd(), 'build/**/*')
  //     ]
  //   })
  // ]
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
}