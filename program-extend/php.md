# PHP

## php 插件

所以解决方法就是禁掉SIP保护机制，步骤是： 重启系统 按住Command + R （重新亮屏之后就开始按，象征地按几秒再松开，出现苹果标志，ok） 菜单"实用工具" ==>> "终端" ==>> 输入csrutil disable；执行后会输出：Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect. 再次重启系统 禁止掉SIP后，就可以顺利的安装了，当然装完了以后你可以重新打开SIP，方法同上，只是命令是csrutil enable

memcached -m 32 -p 11211 -d

### 基础

```php
<?php
$res = $_GET['name'];
echo $res;
```

```php
<?php
$res = $_POST['name'];
echo $res;
```

单引号直接输出.双引号会将变量替换<br>
echo "名字是$name" echo "{$name}是名字"

isset($_POST['num']) 判断num是否有值

is_numeric is_int() 判断是不是整形/整数

127.0.0.1 就等于 locahost

76讲 接口 接口 快速入门:

```
<?php

       //使用程序模拟现实情况
       //定义规范(方法/属性)
       interface iUsb{

              public function start();
              public function stop();
       }
       //编写相机类，让它去实现接口
       //1.当一个类实现了 某个接口,则要求该类必须实现这个接口的所有方法
       class Camera implements  iUsb{

              public function start(){
                     echo "相机开始工作";
              }
              public function stop(){
                     echo "相机停止工作...";
              }
       }
       //编写手机类
       class Phone implements iUsb{
              public function start(){
                     echo "手机开始工作";
              }
              public function stop(){
                     echo "手机停止工作...";
              }
       }
       //如何使用
       $camera1=new Camera();
       $camera1->start();
       $camera1->stop();
       echo "<br/>";
       //手机对象
       $phone1=new Phone();
       $phone1->start();
       $phone1->stop();
?>
```

1. 接口的使用基本语法 interface 接口名{ //属性 //方法 } 接口的方法都不能有方法体 如何去实现接口 class 类名 implements 接口名1,接口2.{ } 接口它的作用就是 声明一些方法，供其它类来实现. 接口还体现编程中我们希望的效果 高内聚低耦合 的特点: 继承是实现接口的关系一览图

  深入讨论接口-interface 什么情况下可以考虑使用接口

2. 定规范
3. 定下规范，让别的程序员来实现,比如: //韩是项目经理 //学生管理系统 (students) //定义接口

  ```
  interface StuManageInterface{

       public function addStudent($stu);
       public function delStudent($id);
       public function updStudent($stu);
  }
  //给三
  class StuManage {

       public function tianjiaxuesheng(){
       }
  }
  ```

  //四

4. 当多个类 ，他们之间是平级的关系. 这些类都会去实现某个功能，只是实现的方式不一样.

接口的细节

1. 不能去实例化一个接口 interface iUsb{ } $a=new iUsb(); (错误!!!)
2. 接口中的所有方法，都不能有方法体
3. 一个类可以去实现多个接口 语法: class 类名 implements 接口1,接口2{

}

1. 接口中可以有属性,但是必须是常量,并且是public interface iUsb{

  ```
    const A=90;
  ```

  } echo "ok".iUsb::A;
2. 接口的方法是public 【默认就是public 】 ,不能是 protected 和private 举例: interface iUsb{

  ```
    const A=90;
    function test();
  ```

  } echo "ok".iUsb::A;
3. 类和接口之间关系一览图

代码:

```
<?php
       interface iUsb2{
              public function a();
       }
       interface iUsb3{
              public function b();
       }
       interface iUsb extends iUsb2,iUsb3{
              const A=90;
              function test();
       }
       class Class1 implements iUsb{

              public function a(){
              }
              public function b(){
              }
              public function test(){
              }
       }
       echo "ok".iUsb::A;
?>
```

从上面我们看出 ① 一个接口可以继承多个其它的接口. 当一个类去实现了某些接口,则必须把所有接口的方法，都实现

## mysql

账号 root 密码 开机密码

连接数据库 mysql_connect(数据地址,用户名,密码); 选择表 mysql_query('use data'); 用于sql语句 db mysql_fetch_row mysql_fetch_object mysql_fetch_array mysql_fetch_assoc

```php

$username = $_POST['username'];
$pwd = $_POST['pwd'];

mysql_connect('127.0.0.1','root','') or die (mysql_error()); // 显示错误信息
$sql = "select * from `user` where username='$username' and `password` = '$pwd' "
$rs = mysql_query($sql)
mysql_num_rows($rs) 返回数量

if(mysql_num_rows($rs)==1){

    echo "登入成功"
    header('location:xxx.php'); // php用头来跳转
}else{

}
```

var_dump() 返回代表数据类型

层次结构 同时管一个人 张三 => 一个张三还是两个张三 数据无效

网装模型 没有解决导航问题. 张经理=>张三 李经理=>张三 那我找张三,是通过张经理还是李经理

关系模型 每个表都是独立 / 平级 两个表的公共字段 / 例如学号

sql structed query language 结构 查询 语言 操作数据库的语言

关系型数据库: Access 小 mysql<br>
sql server

开启mysql<br>
/Applications/XAMPP/xamppfiles/bin/ char(10) 不回收 varchar(10) 回收

创建表格 create table stu{ id int auto_increment primary key, name varchar(10) not null, sex char(1) not null, 'add'varchar(50) address default '地址不详', score decimal(1,3) }

增加 insert into stu(id,name,sex,'add') values (1,'李白','男','北京')

修改 update stu set sex='女' where name='李白'

查询 select _from stu select_ from stu order by score

删除 delete from stu where name='李白'; delete from stu where id='6';
