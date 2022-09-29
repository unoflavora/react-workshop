const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleSizeLimiter = require('./BundleSizeLimiter');

const root = process.cwd();
const isDev = process.env.NODE_ENV === 'development';

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
        use: ['babel-loader', { loader: require.resolve('./my-loader'), options: { name: 'Shafiya' } }],
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
    isDev ? new ReactRefreshWebpackPlugin() : null,
    new BundleSizeLimiter({ limit: '30 KB' }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(root, 'public', 'favicon.ico'),
      template: path.resolve(root, 'public', 'index.html'),
    }),
  ].filter(Boolean),
  devServer: {
    hot: true,
  },
};
