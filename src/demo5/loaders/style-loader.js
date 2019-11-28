const aa = require('loader-utils')
const validateOptions = require('schema-utils')


module.exports = source => {
  console.log(this.context)
  console.log(this)
  console.log('---->', source, '<----')
  return JSON.stringify(source)
}