var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


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

};