//假设依赖是一个函数存在 window.target
var obj = {}
var initValue = '1112'
let dep = []; //依赖收集 数组
Object.defineProperty(obj,'newKey',{
  get:function (){
    console.log('get---');
    dep.push(window.target) // 新增
    return val
  },
  set:function(newVal){
    if(val === newVal){
      return
    }

    // 新增
    for (let i = 0; i < dep.length; i++) {
      dep[i](newVal, val)
    }
    val = newVal
  }
})

console.log( obj.newKey );
obj.newKey = 'change Value'
console.log(obj.newKey);
