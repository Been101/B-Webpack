
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  entry: {
    pageA: './src/demo8/pages/pageA',
    pageB: './src/demo8/pages/pageB',
    pageC: './src/demo8/pages/pageC'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: "initial",
  //         minChunks: 2,//最小重复的次数
  //         minSize: 0//最小提取字节数
  //       },
  //       vendor: {
  //         test: /node_modules/,
  //         chunks: "initial",
  //         name: "vendor",
  //       }
  //     }
  //   }
  // },
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin({
      server: 'static'
    })
  ]
}