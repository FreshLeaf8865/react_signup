'use strict'
const config = require('../config');
const webpack = require('webpack');
const path = require('path');

module.exports = function () {
  return {
    devtool: 'inline-source-map',
    entry: './src',
    output: {
      path: path.join(__dirname, '../../dist'),
      filename: 'bundle.js',
      sourceMapFilename: 'bundle.map',
      publicPath: '../../dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['src', 'node_modules']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader'],
        },
        {
          test: /\.s?css$/,
          loader:"style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap"
        },
        {
          test: /\.(woff2?|ttf|eot)$/,
          loader: 'url-loader'
        },
        {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader"}
      ]
    },
    plugins: []
  }
};