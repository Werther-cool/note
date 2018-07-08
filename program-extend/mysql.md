# mysql

## 登入

mysql -u root -p

-u 以什么身份登入

-p 使用密码登入

-h 192.1.1.1 登入哪个主机(不输入默认是本机)

## 开启和关闭

sudo /usr/local/mysql/support-files/mysql.server start sudo /usr/local/mysql/support-files/mysql.server stop sudo /usr/local/mysql/support-files/mysql.server restart

主键 标识符 唯一 效率高 需要 MySQL 服务在运行状态执行 cd /usr/local/mysql/bin ./mysqladmin -u root -p password 新密码 输入生成的临时密码↵

## 操作数据库

登录到mysql中，然后在mysql的提示符下运行下列命令，每个命令以分号结束。 1、显示数据库列表。 show databases; 缺省有两个数据库：mysql和test。 mysql库存放着mysql的系统和用户权限信息，我们改密码和新增用户，实际上就是对这个库进行操作。 2、显示库中的数据表： use mysql; show tables; 3、显示数据表的结构： describe 表名; 4、建库与删库： create database 库名; drop database 库名; 5、建表： use 库名; create table 表名(字段列表); drop table 表名; 6、清空表中记录： delete from 表名; 7、显示表中的记录： select * from 表名;

## 增加新用户

格式：grant 权限 on 数据库. _to 用户名@登录主机 identified by "密码" 如，增加一个用户user1密码为password1，让其可以在本机上登录， 并对所有数据库有查询、插入、修改、删除的权限。首先 用以root用户连入mysql，然后键入以下命令： grant select,insert,update,delete on_ . _to user1@localhost Identified by "password1"; 如果希望该用户能够在任何机器上登陆mysql，则将localhost改为"%"。 如果你不想user1有密码，可以再打一个命令将密码去掉。 grant select,insert,update,delete on mydb._ to user1@localhost identified by "";
