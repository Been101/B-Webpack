const aa = require('loader-utils')
const validateOptions = require('schema-utils')
console.log(aa)
console.log(validateOptions)



module.exports = source => {
  console.log('---->', source, '<----')
  return source
}