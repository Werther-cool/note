 获取当前时间戳
```
var timestamp = Date.parse(new Date());
var timestamp = (new Date()).valueOf();
var timestamp=new Date().getTime()；
```

当前时间 大于 活动时间 time = 2018-05-02
一天是86400
```
new  Date().getTime()>(new  Date(time).getTime()+86399000)
```

```
// 简单的
var date = new Date(时间戳); //获取一个时间对象

/**
 1. 下面是获取时间日期的方法，需要什么样的格式自己拼接起来就好了
 2. 更多好用的方法可以在这查到 -> http://www.w3school.com.cn/jsref/jsref_obj_date.asp
 */
date.getFullYear();  // 获取完整的年份(4位,1970)
date.getMonth();  // 获取月份(0-11,0代表1月,用的时候记得加上1)
date.getDate();  // 获取日(1-31)
date.getTime();  // 获取时间(从1970.1.1开始的毫秒数)
date.getHours();  // 获取小时数(0-23)
date.getMinutes();  // 获取分钟数(0-59)
date.getSeconds();  // 获取秒数(0-59)
```

{ const  index = detail.duration.indexOf(",");

const  time = detail.duration.slice(0,index);

//24小时 时间戳为86400000

if (new  Date().getTime()>(new  Date(time).getTime()+86399000)) {

message.error('活动时间需要大于当前时间')

return  false;

}

}