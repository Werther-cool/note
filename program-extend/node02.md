## require特性

1. module 被加载时执行,加载后缓存
2. 循环加载时,只输出已执行的部分,还未执行的部分不会输出

### path
join
拼接

resolve 相对路径转绝对路径

supersivor node 自动重启

## fs
fs.stat(path,callback)
判断文件存不存在

## util
promisify 回调
```
const  promisify  =  require('util').promisify
```