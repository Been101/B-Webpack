module.exports = class InlinePlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('compilation', (compilation) => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('ChangeTags', (data, callback) => {
        const body = data.body
        body.forEach(dom => {
          if (dom.tagName === 'script') {
            const src = dom.attributes.src
            delete dom.attributes.src
            const source = compilation.assets[src].source()
            delete compilation.assets[src]
            dom.innerHTML = source
          }

        });
        callback()
        // callback(null, data)
      })
    })
  }
}