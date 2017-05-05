'use strict'
const config = require('../config');
const webpack = require('webpack');
const path = require('path');

module.exports = function() {
    return {
        devtool: 'inline-source-map',
        entry:  './src',
        output: {
            path: path.join(__dirname, '../../public'),
            filename: 'bundle.js',
            sourceMapFilename: 'bundle.map',
            publicPath: '/public/'
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
                    loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'],
                },
                {
                    test: /\.s?css$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff2?|ttf|eot|svg)$/,
                    loader: 'url-loader?limit=10000'
                }
            ]
        },
        plugins: []
    }
};