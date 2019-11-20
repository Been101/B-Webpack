const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const HelloWorld = require('hello-world')
const webpack = require('webpack')
const path = require('path')


module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  plugins: [
    // new WebpackDeepScopePlugin(),
    // new BundleAnalyzerPlugin(),
    new HelloWorld(),
    new webpack.HotModuleReplacementPlugin()
  ]
}