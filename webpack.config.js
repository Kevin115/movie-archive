const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/scripts/index.js',
    output: {
        path: './prod/',
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.sass$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.pug$/,
            loader: "pug-loader"
        }
    ]},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Movie Archive',
            filename: 'index.html'
        })
    ],
    target: 'node'
}

module.exports = config
