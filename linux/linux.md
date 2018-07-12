ssh 帐号@服务器地址IP -p  端口号
ssh username@192.168.1.100  
ssh root@104.129.185.58   -p 26513


ssh werther@119.23.240.4 -p 22 
mm Zyang1122
gpasswd -a username sudo

添加ssh 后授权
chmod 600 authorized_keys

df-h
查看系统使用状态
adduser 添加用户名 werther
gpasswd -a werther sudo  提升权限
sudo visudo

sudo apt-get install vim openssl build-essential libssl-dev wget curl git


### nginx


cd /etc/nginx/
conf.d

sudo vi nginx.cong
 # server_tokens off; 打开注释
sudo service nginx reload  
sudo nigix -t 检查nigix 有没有错误
#### work
```
nginx -s reload -c /etc/nginx/nginx.conf
```sudo chmod 777 website

cp -R

## 域名解析
A记录 映射 填ip
cname 放域名 图床
mx 设置邮箱
txt 反垃圾 https




### work command:
service nginx start

su admin
su root
rm 	-rf 文件名 ./* 删除所有

unzip 解压

压缩 tar zcvf 名字 源文件
解压 tar xvf


mv dist poc-web 移动文件
**Linux当前目录所有文件移动到上一级目录  
**

**mv * ../**

本地上传文件到服务器

scp -p 端口号 本地文件地址  werther@119.23.240.4:/home/werther/dbbackup