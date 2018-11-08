
#Array

##map

return 返回一个新数组

```
let newArr =  Array.map((currentValue,index,array)=>{
  // return doSometing
  })
```
每次return 的值拼成一个新的数组


##forEach

修改原数组

```
  Array.forEach((currentValue,index,array)=>{
    //doSometing
  })
```

## splice
arrayObject.splice(index,howmany,item1,.....,itemX)
删除或添加 index 位置 howmany 删除的数量 item 添加的内容
修改原数组



## includes

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));

##  filter

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => return word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

## find

Array的find 只能遍历数组
lodash的find 可以遍历 数组对象内的属性

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.find(checkAdult);
}



###lodash find

```
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  _.find(users, function(o) { return o.age < 40; });
  // => object for 'barney'
 ```
## reduce


```
const accountNumAmount = detailData.itemList
  ? detailData.itemList.reduce((previous, current) => {
    return previous = add(previous, current.accountNum || 0);
  }, 0)
  : 0;
```