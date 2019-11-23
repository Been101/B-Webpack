const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const HelloWorld = require('hello-world')
const webpack = require('webpack')
const path = require('path')
console.log(process.argv[3])

console.log(__dirname)
module.exports = {
  // entry: '', // default value ----> ./src/index.js
  output: {
    path: path.join(__dirname, '../../', 'dist'),
    filename: 'bundle.js'
  }, // default value ---> dist/main.js
  mode: 'development',
  module: {
    rules: []
  },
  plugins: []
}