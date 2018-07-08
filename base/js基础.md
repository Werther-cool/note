# JS默认

Boolean 值、数字和字符串的原始值的有趣之处在于它们是伪对象，这意味着它们实际上具有属性和方法

# toString() 

不过 ECMAScript 定义所有对象都有 toString() 方法
`Boolean` 类型的 toString() 方法只是输出 "true" 或 "false"，结果由变量的值决定：
`Number` 类型的 toString() 方法返回的都是数字的十进制表示
```
var iNum = 10;
alert(iNum.toString(2));	//输出 "1010"
```

```
var s1 = String(null);	//"null"
var oNull = null;
var s2 = oNull.toString();	//会引发错误
```
对 null 和 undefined值强制类型转换可以生成字符串而不引发错误

# parseInt() &&parseFloat()

只有对 String 类型调用这些方法，它们才能正确运行；对其他类型返回的都是 NaN。
parseInt() 方法首先查看位置 0 处的字符，判断它是否是个有效数字；如果不是，该方法将返回 NaN，不再继续执行其他操作。但如果该字符是有效数字，该方法将查看位置 1 处的字符，进行同样的测试

## 强制类型转换

- ECMAScript 中可用的 3 种强制类型转换如下：
     - Boolean(value) 把给定的值转换成 Boolean 型；
     - Number(value) - 把给定的值转换成数字（可以是整数或浮点数）；
     - String(value) - 把给定的值转换成字符串；

## typeof 
 - typeof 是 运算符/关键字 返回值为字符串类型

对变量或值调用 typeof 运算符将返回下列值之一：
```
undefined - 如果变量是 Undefined 类型的
boolean - 如果变量是 Boolean 类型的
number - 如果变量是 Number 类型的
string - 如果变量是 String 类型的
object - 如果变量是一种引用类型或 Null 类型的(除了函数)
Function - 如果变量是函数
```
 typeof 对未声明的变量返回undefined，
 而其他运算符只能用于已声明的变量上。
 
 
## instanceof 运算符
在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 "object"。
ECMAScript 引入了另一个 Java 运算符 instanceof 来解决这个问题。
 用来检查是否是某个构造函数
```
对象  instanceof  构造函数/具体类型
```
```
var oStringObject = new String("hello world");
alert(oStringObject instanceof String);	//输出 "true"
```
- 对象  instanceOf  构造函数/具体类型 
  - 对象.constructor
  - (实例的constructor 来自原型对象的constructor 共同指向 构造函数)
  -  constructor 一定指向构造函数

## in
```
    var json ={a:12,b:13};
    
    alert('length' in json); //false
    alert('a' in json);  // true
```
- in关键字 
    - 在判断属性是否存在于对象中时,key 是字符串,需要加双引号
    - in 操作array数组时 操作的是索引值 (1 in arrar) 
    - 原型对象上的属性也会被枚举

### json转字符串
JSON.stringify(json)
```
    var json={a:12,b:13};
    var jsonString =JSON.stringify(json);
    alert(jsonString); //{"a":12,"b":13}
    
```

### == 
 - 比较数值是否相等,(比较,基本数据类型)
 - 是否指向同一块内存空间(比较,引用类型)

### 逻辑运算符
 - 位运算符  &  和  |  返回值为bool 
 - 逻辑运算符 && 和 ||  返回的是比较的值

 



# 原始类型

标签（空格分隔）： Array string DOM Window Date
---


ECMAScript 有 5 种原始类型（primitive type），即 Undefined、Null、Boolean、Number 和 String。


# Undefined
类型只有一个值，即 undefined。当声明的变量未初始化时，该变量的默认值是 undefined。
提示：值 undefined 并不同于未定义的值。但是，typeof 运算符并不真正区分这两种值。考虑下面的代码：
```
var oTemp;

alert(typeof oTemp);  //输出 "undefined"
alert(typeof oTemp2);  //输出 "undefined"
```
```
   function testFunc() {
    }

    alert(testFunc() == undefined);  //输出 "true"
```
前面的代码对两个变量输出的都是 "undefined"，即使只有变量 oTemp2 从未被声明过。如果对 oTemp2 使用除 typeof 之外的其他运算符的话，会引起错误，因为其他运算符只能用于已声明的变量上。


# Null 类型

- 正常情况下 变量的值不会为null,除非手动设置

- 另一种只有一个值的类型是 Null，它只有一个专用值 null，即它的字面量。值 undefined 实际上是从值 null 派生来的，因此 ECMAScript 把它们定义为相等的。
```
alert(null == undefined);  //输出 "true"
```
尽管这两个值相等，但它们的含义不同。
- undefined 是声明了变量但未对其初始化时赋予该变量的值，null 则用于表示尚未存在的对象。
- 如果函数或方法要返回的是对象，那么找不到该对象时，返回的通常是 null。

# Boolean


# Number
表示无穷大Infinity
NaN，表示非数（Not a Number)
```
 alert(NaN == NaN);  //输出 "false"
```
函数 isNaN() 会做得相当好：(是否能转换成数字,true表示不能,false 表示能)

```
alert(isNaN("blue"));  //输出 "true"
alert(isNaN("666"));  //输出 "false"
```



# 字符串
String 类型的独特之处在于，它是唯一没有固定大小的原始类型。
字符串字面量是由双引号（"）或单引号（'）声明的。而 Java 则是用双引号声明字符串，用单引号声明字符。但是由于 ECMAScript 没有字符类型，所以可使用这两种表示法中的任何一种

`var a =12345;`
`var new= a+'';` 转换成字符串
`var new1= string(a);`

`indexof(a)`,如果不存在,返回-1,如果存在返回所在的位置
`charAt(0) `取出对应的值
`charcodeAt()` 取出Unicode编码
拼接 `str3=str1.contact(str2)`

### slice

(数组&字符串)创建一个新数组,不回影像原数组
`str2 =str1.slice(1)`  //1个参数, 返回从该位置到末尾的字符串
`str2 =str1.slice(1,4)` //从4之前那一位就截止, 数组1-3位
`substr(1) substr(1,4)`  截取 修改原字符串   

### splice ()

数组的方法,删除,插入,替换`splice(2,1,'red','green')`  从第二位开始,删除一项,添加` 'red''green'`会修改原数组返回删除的项


# 数组:
有序变量的集合
var arr = [  , , ]
js 的数组可以存储不同类型的变量;其他语言不可以

    var arr =new Array();

`var a=arr.push(1); a=1;` push会从后面添加.unshift从前面,都会**返回数组长度**

`var a = arr.pop(); a=1; `pop 从后面删除一个元素  shift从前面删除 都会**返回删除的那个元素**

`var arr1=arr2.split('-')`    split 通过传入的字符转换成对应的数组,

```
//删除index对应的内容,使其为undefined,但index保留
delete.arr[index]  
```

# DOM

childnodes 子元素
nodetype 类型
元素节点1 (标签)
属性节点2
文本节点3
`nodevalue` 具体内容 `p.chidnodes[0].nodevalue`
firstchild lastchild
`children`(只包括元素节点)
`prentnode`(父节点 ,点击隐藏父级 )
nextElenmentSibling(非IE678可显示) || nextSibling  (IE678课显示)

创建元素

`var a = createElement('标签名')`  创建一个元素节点,在内存
`createTextNode` 创建文本节点
`div.appendChild(a)`  生成在div末尾
`div.insertBefore(a,ali[0])` 插入 ali[0]什么之前
`removeChild`(删除节点)

### json

键值对来存储
var json={name:'jerry',age:'18'}
无序,数据一般不重复,k,v
json.length 获取不到

```for (var key in json){}```

for in 的是对象,便利的是对象的属性
json  键值对 抽取函数  k : function(){},


## window

    window.onload
    window.onscroll
    window.onresize
    window.open   返回值:新窗口  参数
    window.close
    window.navagitor.userAgent 返回浏览器信息
    window.location  地址 
    
    
```
    try{
        可能出错的代码
    }catch(e){
        补救的代码
    }
```    

    
# Date
```
时间戳: var times= (new Date()).getTime() 
getTime() 返回从 1970 年 1 月 1 日至今的毫秒数
```
