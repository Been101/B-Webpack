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
  resolveLoader: {
    modules: [path.resolve(__dirname, './loaders'), path.resolve('node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: path.resolve(__dirname, './loaders/style-loader.js')
        // loader: [
        //   path.resolve(__dirname, './loaders/style-loader.js'),
        //   'css-loader'
        // ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-layout-loader',
          options: {
            layout: path.join(__dirname, './aaa/layout.html'),
            placeholder: '{{__content__}}'
          }
        }
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   server: 'static'
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // new WebpackDeepScopePlugin(),
    // new UglifyJSplugin({
    //   cache: true,//启用缓存
    //   parallel: true,// 使用多进程运行改进编译速度
    //   sourceMap: true//生成sourceMap映射文件
    // })
  ]
}