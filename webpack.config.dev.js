const autoprefixer = require('autoprefixer');
const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index.jsx'
  ],

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
    })
  ],

  module: {
    loaders: [
      {
        loader: 'html',
        test: /\.html$/,
      },

      {
        include: path.join(__dirname, 'app'),
        loaders: ['react-hot', 'babel'],
        test: /\.jsx?$/,
      },

      {
        test: /\.s?css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ]),
      },

      {
        include: path.join(__dirname, 'app'),
        test: /\.(jpe?g|gif|png|ico)$/,
        loader: 'file-loader',
        query: {
          name: 'img/[path][name].[ext]'
        },
      },
    ],
  },

  postcss: [
    autoprefixer({browsers: ['last 2 versions']}),
  ],
};
