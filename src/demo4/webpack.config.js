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
  mode: 'development',
  optimization: {
    usedExports: true
  },
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
  plugins: []
}