
 ## wepy

 ### 组件通信

 $invoke 同页面/同组件  调用子组件的方法
 $broadcast 广播 父对 所有子组件发送广播
 $emit 子组件 对所有父级发送事件

 通信接受
 ```
 events = {
    //接收创建code
    'createCode': (text) => {
        let size = parseInt(500 / this.clientRpx);
        drawQrcode({
            canvasId: 'myQrcode',
            text: text,
            width: size,
            height: size,
        })
    }
};
 ```

 ### 动态传值

.aync 动态传值给子组件



 ```
 <child :title="parentTitle" :syncTitle.sync="parentTitle" :twoWayTitle="parentTitle"></child>


 // child.wpy
 props= {

   twoWayTitle: {
     type: String,
     default: 'nothing',
     twoWay: true
   }
 }

 ```
