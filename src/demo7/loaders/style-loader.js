const loaderUtils = require('loader-utils')
// const validateOptions = require('schema-utils')


// module.exports = source => {
//   console.log(this.context)
//   console.log(this)
//   console.log('---->', source, '<----')
//   return JSON.stringify(source)
// }

module.exports = function (source) {
  console.log(source)
  let script = (`
    let style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style)
  `);
  return source
}