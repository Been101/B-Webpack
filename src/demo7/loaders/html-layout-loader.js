const path = require('path');
const fs = require('fs');
const loaderUtils = require('loader-utils');
const defaultOptions = {
  placeholder: '{{__content__}}',
  decorator: 'layout'
}
module.exports = function (source) {
  console.log('--->', this.context, '<----')
  console.log('-source-->', source, '<---source-')
  let callback = this.async();
  this.cacheable && this.cacheable();
  const options = { ...loaderUtils.getOptions(this), ...defaultOptions };
  const { placeholder, layout, decorator } = options;
  const layoutReg = new RegExp(`@${decorator}\\((.+?)\\)`);
  let result = source.match(layoutReg);
  if (result) {
    source = source.replace(result[0], '');
    render(path.resolve(this.context, result[1]), placeholder, source, callback)
  } else {
    render(layout, placeholder, source, callback);
  }

}
function render(layout, placeholder, source, callback) {
  fs.readFile(layout, 'utf8', (err, html) => {
    html = html.replace(placeholder, source);
    callback(null, `module.exports = ${JSON.stringify(html)}`);
  })
}