const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const HelloWorld = require('hello-world')
const webpack = require('webpack')
const path = require('path')

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
      },
      // 处理图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 处理 csv, tsv 文件
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      // 处理 xml 文件。对 JSON 的支持是内置的。
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  plugins: []
}