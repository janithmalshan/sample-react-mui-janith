const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    // devtool: 'eval-source-map',

    // output: {
    //     path: BUILD_DIR,
    //     filename: 'bundle.js'
    //
    // },

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
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // // global app config object
        // config: JSON.stringify({
        //     apiUrl: 'http://localhost:4000'
        // })
    }

});

