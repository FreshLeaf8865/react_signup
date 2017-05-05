'use strict'
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const config = require('../config');
const commonConfig = require('./base.js');

module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        entry: [
            'webpack/hot/dev-server',
            `webpack-dev-server/client?http://${config.host}:${config.port}/`,
            './src'
        ],
        devServer: {
            historyApiFallback: true,
            host: config.host,
            port: config.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}