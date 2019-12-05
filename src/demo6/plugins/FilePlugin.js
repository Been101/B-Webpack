// 生成一个md文件，里面放着所有的文件名

class FilesPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('EmitPlugin', (compilation, callback) => {
      console.log(this.options)
      console.log(compilation.assets)
      let content = '## 文件内容列表 \n'
      for (let filename in compilation.assets) {
        content += ` - ${filename} \n`
      }

      compilation.assets[this.options.filename || 'filelist.md'] = {
        source() {
          return content
        },
        size() {
          return Buffer.byteLength(content)
        }
      }
      callback()
    })
  }
}

module.exports = FilesPlugin