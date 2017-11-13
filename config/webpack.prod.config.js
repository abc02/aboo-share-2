const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const sourcePath = path.join(__dirname, '../src');

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      }
    }),
    new HtmlWebpackPlugin({
      template: sourcePath + '/index.html',
      cache: false,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
  ]
})