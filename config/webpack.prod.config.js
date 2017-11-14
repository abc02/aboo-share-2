const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('./path')

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  output: {
    //导出目录
    publicPath: "/", // server-relative
    hashDigestLength: 6,
    //导出文件
    filename: '[name]_[chunkhash].js'
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
      template: path.sourcePath + '/index.html',
      cache: false,
      minify: {
        collapseInlineTagWhitespace:true,
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
  ]
})