# css 样式笔记


## html5细节
 - 空格 占了一个fontsize的大小,可以把fontsize设置为0,内部单独设置fontsize,来解决

- role / aria-controls 属性 只和语义有关 

- 条件注释 
- js引入放到body最后
- 直接子代,
- 字体图标.伪类

- ➕选择器,ul >li + li{  }  选择除了第一个的li   做分割线,除了第一个

行间设置背景图 
- 让大的图片显示在小的视口中间

```background-position: center center```
    
- 图片响应式:  移动端 使用更小的图片
- 图片的大小 -> 颜色的多少 

- bgsize:
  - convert:较小边等比例缩放到目标的宽度 
  - contain: 较大的边 达到目标的边,没有任何内容溢出  


```
$('#id').each(function( i, item){
var item = $(item);  //item 是一个dom对象})
```

- .trigger('resize') //立即触发
    
- 谷歌浏览器 本地同步 修改: 开发者工具-> source ->右键 add folder to workspace -> 找到要同步的文件->     	  允许 --> 

落空类:删除类+transition -> 过渡动画

透视: `perspective: 1000px;`

渐变: `background:linear-gradient(0deg, #395ecb 0%, #3657be 35%, #242161 75%, #1a0531 100%);`

`3D:transform-style: preserve-3d;`
翻转到后面时隐藏 :`backface-visibility: hidden;`

```Js
animation: name 2s infinite;
 @keyframs name{
	0%{transform: translateX();}
	100%{}
}

过度: transition :all 1s;
```
属性选择器中的属性值需要引号。
* 类名使用小写字母，以中划线分隔
* id采用驼峰式命名
* scss中的变量、函数、混合、placeholder采用驼峰式命名
	

V


### 取消文字选中 
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  user-select:none;

### img占位 防止页面抖动

外层容器
width:100%
height:0
padding-top:100%


### 选中状态

margin-top:-1px
盖住上面的 border


###css sticky footers

### 垂直居中 
父级 display:table
text  display:table-cell




## 2x 3x图片
bg-image($url)
  background-image: url($url + "@2x.png")
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
    background-image: url($url + "@3x.png")

####border

还有伪类

@media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.7)
      transform: scaleY(0.7)

@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.5)
      transform: scaleY(0.5)


### 搜索框
<!--搜索 去掉右边 x-->
input[type=search]::-webkit-search-cancel-button {
  display: none;
  -webkit-appearance: none;
}


## UI 组件

####星星组件

size 图片大小
number 数值
v-for 循环数量 status 来表示 星星图片状态 

#### 弹出层 渐变
transition name="fade"

&.fade-enter-active, &.fade-leave-active
        transition: all 0.5s
&.fade-enter, &.fade-leave-active
opacity: 0
background: rgba(7, 17, 27, 0)

###Grid布局







## js 基础

### json
parse用于从一个字符串中解析出json对象,如
var str = '{"name":"huangxiaojian","age":"23"}'
结果：JSON.parse(str)
注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。

stringify()用于从一个对象解析出字符串，如
var  a = {a:1,b:2}
结果：JSON.stringify(a)
"{"a":1,"b":2}"

## jwt

服务器先生成jwt，然后客户端拿着第三部分，和客户端自己的第一和第二部分再发到服务端，服务端再根据客户端的第一、第二部分，算出第三部分再和客户端传过来的第三部分比较？


