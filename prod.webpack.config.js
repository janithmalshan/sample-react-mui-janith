const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist/');

module.exports = merge(baseConfig, {

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'

    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

    ],

    optimization: {
        minimize: false,
        minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                output: {
                    comments: false,
                    beautify: false
                },
                warnings: false
            }
        })],

        noEmitOnErrors: true,
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        removeAvailableModules: true,
        removeEmptyChunks: true,
    //     mergeDuplicateChunks: true,
    //     flagIncludedChunks: true,
    //     occurrenceOrder: true,
    //     usedExports: true,
    //     concatenateModules: true,
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    },

});