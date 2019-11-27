const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const HelloWorld = require('hello-world')
const path = require('path')
const UglifyJSplugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

console.log(__dirname)
module.exports = {
  // entry: '', // default value ----> ./src/index.js
  // output: {
  //   path: path.join(__dirname, '../../', 'dist'),
  //   filename: 'bundle.js' // default value ---> dist/main.js
  // },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          path.resolve(__dirname, './loaders/style-loader.js'),
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   server: 'static'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackDeepScopePlugin(),
    new UglifyJSplugin({
      cache: true,//启用缓存
      parallel: true,// 使用多进程运行改进编译速度
      sourceMap: true//生成sourceMap映射文件
    })
  ]
}