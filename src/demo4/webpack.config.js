const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const HelloWorld = require('hello-world')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

console.log(__dirname)
module.exports = {
  // entry: '', // default value ----> ./src/index.js
  // output: {
  //   path: path.join(__dirname, '../../', 'dist'),
  //   filename: 'bundle.js' // default value ---> dist/main.js
  // },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: ['style-loader', 'css-loader']
        // use: ['style-loader', 'css-loader']
        use: [
          {
            loader: 'style-loader',
            options: {}
          }, 'css-loader'
        ],
        sideEffects: true
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      server: 'static'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new WebpackDeepScopePlugin(),
    new UglifyJsPlugin({
      cache: true,//启用缓存
      parallel: true,// 使用多进程运行改进编译速度
      sourceMap: true//生成sourceMap映射文件
    })
  ]
}