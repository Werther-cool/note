## 工作总结

##router 传参

  View 接受参数    supplier:this.props.params.supplier || "xiubo",
  router /order/stewarOrderList/:supplier
  <Link to={'/order/stewarOrderList/:xiubo'} className="blockDiv">
                <span>秀</span> <span>秀博公司</span>
  </Link>

### 工程上新增doc 文件夹

使用插件的基本方法 和 介绍
降低他人 上手成本

## 源码阅读

搭建demo => 打印 =>断点

## 表单验证

第一次获取 焦点后 显示错误提示  => nameIsBlur 一个字段记录是否 是第一次输入 初始值false
校验 实时进行 nameExamine 校验input 是否正确 初始值false

显示错误样式 !nameExamin && nameIsBlur
提交 namaExamine && passwordExamine && 不需要校验的值不为空

## 循环 多选

## 组织冒泡
 e.stopPropagation();

 ## css
   height: calc(~'100vh - 90px');

 ## 跳转
   Toast.loading('正在登录', 1, () => {
   if (window.app.currentRouterPath === '/') {
     window.app.routerGoTo('home');
   } else {
     window.app.routerGoTo(window.app.currentRouterPath);
   }
 });

 ## 小程序

 动态获取值key value
 if (data.preload) {
    this.key = Object.keys(data.preload) [0];
    this.itemList = data.preload[this.key]
    console.log("itemList",this.itemList);
  }

  this.$preload({[this.key]:this.itemList});

  ### react 表单
  增添删除
  getFieldDecorator
