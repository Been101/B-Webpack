
const path = require('path')
module.exports = {
  mode: 'development',
  resolveLoader: {
    modules: [path.resolve(__dirname, './loaders'), path.resolve('node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'log-loader'
      },
      {
        test: /\.css$/,
        use: [path.resolve(__dirname, './loaders/style-loader.js'), 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader']
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
  }
}