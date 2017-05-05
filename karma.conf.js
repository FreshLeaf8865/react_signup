var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: false, //just run once by default
        frameworks: [ 'mocha', 'chai', 'browserify' ], //use the mocha test framework
        files: [
            './src/tests/global-test.js' //just load this file
        ],
        preprocessors: {
            './src/tests/global-test.js': [ 'browserify','webpack' ] //preprocess with webpack and our sourcemap loader
        },
        plugins: ['karma-browserify', 'karma-mocha',  'karma-chai', 'karma-chrome-launcher', 'karma-webpack'],
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
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
            }
        },
        webpackServer: {
            noInfo: false //please don't spam the console when running in karma!
        }
    });
};