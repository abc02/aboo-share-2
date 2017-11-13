const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, '../src');
const outputPath = path.join(__dirname, '../build');

module.exports = {
    // 入口文件
    entry: {
        index: sourcePath + '/index.js',
    },
    // 出口文件
    output: {
        path: outputPath,
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@": sourcePath,
            "styles": "@/styles"
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: sourcePath + '/index.html'
        }),
    ],

    module: {
        // 配置编译打包规则
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                      name: '[hash].[ext]',
                      outputPath:'images/'
                    }
                  }
            }
        ]
    }

}