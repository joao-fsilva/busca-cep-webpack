const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `ejs-webpack-loader!src/views/index.ejs`,
            filename: 'index.html',
            hash: true
        }), new HtmlWebpackPlugin({
            template: `ejs-webpack-loader!src/views/creditos.ejs`,
            filename: 'creditos.html',
            hash: true
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000
    }
};