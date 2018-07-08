# MongoDB

1 开启服务 mongod -f /usr/local/etc/mongod.conf

1 brew services start mongodb 2 mongo 开启shell操作 3 use db_demo 启用某个db 4 show collections 5 db.createCollection("users")

非Mongo 终端 ~ mongoimport -d dumall -c users --file /Users/zhouyang/Desktop/dumall-users

登陆：mongo --port 17380<br>
显示DB：show dbs 进入某DB：use test_cswuyg 显示集合：show tables

db.collection.update(

<query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)</document></boolean></boolean></update></query>

query : update的查询条件，类似sql update查询内where后面的。

update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的

upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。

multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。

writeConcern :可选，抛出异常的级别。

> db.col.find({},{"title":1,_id:0}).limit(1).skip(1) { "title" : "Java 教程" }
