
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

## includes

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));

##  filter

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
