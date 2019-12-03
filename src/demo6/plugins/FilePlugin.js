// 生成一个md文件，里面放着所有的文件名

class FilesPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync()
  }
}