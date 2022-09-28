const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = process.cwd();

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve(root, 'src', 'index.js'),
  output: {
    path: path.resolve(root, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.png$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(root, 'public', 'favicon.ico'),
      template: path.resolve(root, 'public', 'index.html'),
    }),
  ],
};
