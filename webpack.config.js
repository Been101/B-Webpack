const merge = require('webpack-merge')
const path = require('path')
const demo = process.argv[4] || process.argv[3]

const demoConfig = require(`./src/${demo}/webpack.config.js`)

module.exports = merge({
  entry: `./src/${demo}/index.js`,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js' // default value ---> dist/main.js
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: process.env.PORT || 8080
  }
}, demoConfig)