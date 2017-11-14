var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.config');
const path = require('./path')

module.exports = merge(baseWebpackConfig, {

  devtool: 'source-map',
  devServer: {
    contentBase: path.outputPath, //本地服务器所加载的页面所在的目录
    inline: true,//实时刷新
    compress: false,
    hot: true,
    open: true, //启动服务，自动打开浏览器
    port : 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev')
      }
    }),
  ]
})