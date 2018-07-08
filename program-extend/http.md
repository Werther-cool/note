# HTTP

## rest 架构 api封装规范

增删改查都是一个地址，具体靠http头部信息判断。

## base64

Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一

## 地理位置

navigator.geolocation.getCurrentPosition(function(position){

var y =position.coords.longitude //经度

var x = position.coords.latitude //纬度 })

百度api

## 本地存储

storage

sessionStorage 临时存储 当前页面 localStorage 永久存储

window.localStorage.setItem(key,value) window.localStorage.getItem(key)

修改本地存储的内容触发事件-- 购物车

```
window.addEventListener('storage',function(ev){

log(ev.key);


})
```

## 基础

ip地址 xxx.xxx.xxx.xxx 唯一地址 端口:电脑上特定的 网络应用软件 一个ip地址 绑定 多个域名 DNS

B/S browser server C/S client 客户端,qq,迅雷 server

## 服务器

服务器分类

按类型分: 文件服务器、数据库服务器、邮件服务器、Web 服务器等； 按软件分: Apache服务器、Nginx 服务器、IIS服务器、Tomcat服务器、Node服务器等。 按操作系统分: Linux服务器、Windows服务器等；

常见的服务器软件有：

文件服务器：Server-U、FileZilla、VsFTP等； 数据库服务器：Oracle、MySQL、PostgreSQL、MSSQL等； 邮件服务器：Postfix、Sendmail等； HTTP 服务器：Apache、Nginx、IIS、Tomcat、NodeJS等； 这里我们主要介绍HTTP服务器

### 互联网

- 互联网就是指通过TCP/IP协议族互相连接在一起的计算机网络。而Web是运行在互联网上的一个超大规模的分布式系统(提供图形话访问服务,文档和超链接,组成网状结构)。Web设计初衷是一个静态信息资源发布媒介，通过超文本标记语言（HTML）描述信息资源，通过统一资源标识符（URI）定位信息资源，通过超文本转移协议（HTTP）请求信息资源。HTML、URL和HTTP三个规范构成了Web的核心体系结构，是支撑着Web运行的基石

- TCP/IP(Transmission Control Protocol/Internet Protocol)即传输控制协议/网间协议，是一个工业标准的协议集，它是为广域网（WAN）设计的。

- TCP/IP 协议族 最重要的是 分层.

- 域名: 一个域名的目的是便于记忆和沟通的一组服务器的地址（网站，电子邮件，FTP等）

- 浏览器对应 第5(会话层)6(表示层)7(应用层)层 ,TCP 对应 第四层 传输层,IP 对应第三层 网络层, 网卡(驱动程序)对应 第二层(链路层),第一层(物理层)

![02-屏幕快照 2017-02-11 上午8.48.13](media/14871575683214/02-%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-11%20%E4%B8%8A%E5%8D%888.48.13.png)

![屏幕快照 2017-02-10 下午8.45.04](media/14871575683214/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-10%20%E4%B8%8B%E5%8D%888.45.04.png)

### 报文

- 请求报文 (客户端-> 服务端)

  1. 请求行 `Get /Http/1.1`
  2. 首部字段

- 响应报文 (服务端-> 客户端)

  1. 状态行 `Http/1.1 200 Ok`
  2. 首部字段

- 头: 一些配置,键值对,描述体

- 体:`<h1>hello</h1>` 只能接受字符串信息

![屏幕快照 2017-02-13 下午3.08.18](media/14871575683214/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-13%20%E4%B8%8B%E5%8D%883.08.18.png)

### DNS

domain name server 域名 解析

相当于一本新华字典 域名 : IP地址 www.baidu.com : 123:33:123:233

最近的就是本机 hosts

### CDN

Content Delivery Network，即内容分发网络

![00e93901213fb80e7e1a2cd937d12f2eb83894f0](media/14869706683746/00e93901213fb80e7e1a2cd937d12f2eb83894f0.jpg)

- CDN=更智能的镜像+缓存+流量导流

  - 其目的是通过在现有的Internet中增加一层新的网络架构，将网站的内容发布到最接近用户的网络"边缘"，使用户可以就近取得所需的内容，提高用户访问网站的响应速度。
  - 通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。

- CDN加速

  - CDN加速将网站的内容缓存在网络边缘（离用户接入网络最近的地方），然后在用户访问网站内容的时候，通过调度系统将用户的请求路由或者引导到离用户接入网络最近或者访问效果最佳的缓存服务器上，有该缓存服务器为用户提供内容服务；相对于直接访问源站，这种方式缩短了用户和内容之间的网络距离，从而达到加速的效果。

- 节约带宽
- 百度提供的CDN全国各地设立节点,会根据最近的来加载
- 网站使用同一份文件,浏览器会缓存
