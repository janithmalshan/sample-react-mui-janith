var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, 'src');


module.exports = {

    entry: {
        main: APP_DIR + '/index.jsx'
        // app: [
        //     'react-hot-loader/patch',
        //     'webpack-hot-middleware/client?reload=true',
        //     APP_DIR + 'index.jsx'
        // ]
    },


    mode: 'development',
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
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}