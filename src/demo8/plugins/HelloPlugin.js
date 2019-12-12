class HelloPlugin {
  constructor(options) {
    console.log(options)
    this.options = options
  }

  // 每一插件
  apply(compiler) {
    // compiler 要启动一次新的编译

    // compiler.plugin('compilation', function (compilation) {
    //   compilation.plugin('optimize-chunk-modules', function () {
    //     console.log('******************')
    //   })
    // })
    compiler.hooks.compilation.tap('compilation', function (compilation, params) {
      compilation.hooks.optimizeChunkModules.tap('op', function (chunk, modules) {
        console.log(chunk.length)
        console.log(modules.length)
      })
    })
  }
}

module.exports = HelloPlugin