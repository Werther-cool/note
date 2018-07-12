
### promise

基础用法
```
 let promise = new Promise(function(resolve, reject) {
	 console.log('Promise');
	 resolve();
 });
 promise.then(function() {
	 console.log('resolved.');
 });
```


错误 具有冒泡性质 一般在最后 用catch
```javascript
// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```


try  处理 同步或者异步的函数 .
new Promise 内部也是同步
```javascript
const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next
```

###  执行顺序
Promise then在事件循环结束后调用
而settimerout在下一轮事件循环调用。



```
(function test() {
    setTimeout(function() {console.log(4)}, 0);
    new Promise(function executor(resolve) {
        console.log(1);
        for( var i=0 ; i<10000 ; i++ ) {
            i == 9999 && resolve();
        }
        console.log(2);
    }).then(function() {
        console.log(5);
    });
    console.log(3);
})()
```
// 答案 1,2,3,5,4