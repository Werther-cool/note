# node

## node

jade@1.11.0 c

模块化： 系统模块 自定义模块

1.模块组成 2.npm 3.发布自己的模块

引入自己的模块----./ ? 对外输出东西----必须加给exports

exports.xxx=??; exports.xxx=??; exports.xxx=??;

module.exports={ xxx: ??, xxx: ??, xxx: ?? };

require----引入其他模块 exports----输出 module----批量输出

1.自己的模块 require module exports

2.引入模块 ./ ? 3.".js"可选

npm：NodeJS Package Manager(NodeJS包管理器) 1.统一下载途径 2.自动下载依赖

npm install xxx npm uninstall xxx

node_modules----放模块 ./ 不加./ 必须放在node_modules里面

require 1.如果有"./" 从当前目录找

2.如果没有"./" 先从系统模块 再从node_modules找

自定义模块统一，都放到node_modules里面

1.模块里面 require----引入 exports----输出 module.exports----批量输出

2.npm 帮咱们下载模块 自动解决依赖

3.node_modules 模块放这里

npm init npm publish npm --force unpublish

## 常用模块

<!-- 字符串解析 --> querystring.stringify

> querystring.parse('name=scott&course=jade&couse=node&from ') { name: 'scott', course: 'jade', couse: 'node', 'from ': '' }

> querystring.parse('name=scott,course=jade,couse=node,from',',') { name: 'scott', course: 'jade', couse: 'node', from: '' }

> querystring.parse('name:scott,course:jade,course:node,from',',',':') { name: 'scott', course: [ 'jade', 'node' ], from: '' }

querystring.escape(str) 对给定的 str 进行 URL 编码。 querystring.unescape(str) 对给定的 str 进行解码。

<!-- url -->

> url.parse('<http://www.imooc.com:8080/video/6710?from=scoot#floor1',true>) Url { protocol: 'http:', slashes: true, auth: null, host: 'www.imooc.com:8080', port: '8080', hostname: 'www.imooc.com', hash: '#floor1', search: '?from=scoot', query: { from: 'scoot' }, pathname: '/video/6710', path: '/video/6710?from=scoot', href: '<http://www.imooc.com:8080/video/6710?from=scoot#floor1>' }

> url.resolve('<http://imooc.com/','course/list>') '<http://imooc.com/course/list>'

### crypto 加密

### cookie、session

cookie：在浏览器保存一些数据，每次请求都会带过来 *不安全、有限(4K)

session：保存数据，保存在服务端 *安全、无限

session：基于cookie实现的 *cookie中会有一个session的ID，服务器利用sessionid找到session文件、读取、写入

隐患：session劫持

a.发送cookie res.secret='字符串'; res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true});

b.读取cookie cookie-parser

server.use(cookieParser('秘钥'));

server.use(function (){ req.cookies 未签名版 req.signedCookies 签名版 });

c.删除cookie res.clearCookie(名字);

## 中间件

### multer

multer 是一个上传文件的中间件 必须指定 enctype="multipart/form-data".

### consolidate

整合,管理 模板引擎的中间件

var consolidate = require('consolidate'); 代替引入jade ejs,npm后自动挂载到consolidate对象上

配制方法:

//输出什么东西 server.set('view engine','html'); //模板文件放在哪 server.set('views','./views'); //使用哪种模板引擎 server.engine('html',consolidate.ejs);

server.get('/index',function(req,res){ res.render('1.ejs',{name:'blue'});

});

res.render('模板文件',数据);

### route

系统自带的模块

## express

express -e . 当前目录执行 express脚手架 ejs 引擎
