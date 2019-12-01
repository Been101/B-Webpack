class EmitPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('Emit', function (compilation, callback) {
      setTimeout(() => {
        console.log('emit-------------')
        callback()
      }, 2000)
    })
  }
}

module.exports = EmitPlugin