

## virtual Dom

  react 代码 经过 babel 转译后 React.createElement 方法

  ```
  <div>react代码</div>
  ```

  bable编译

  ```
  React.createElement(
    "div",
    null,
    "react代码"
    )
  ```

  ###

  ### 生成的virtual dom
  ```
  {
    tag: "div",
    props: {},
    children: [
        "Hello World",
        {
            tag: "ul",
            props: {},
            children: [{
                tag: "li",
                props: {
                    id: 1,
                    class: "li-1"
                },
                children: ["第", 1]
            }]
        }
    ]
  }

  ```


 ### virtual Dom 转化成 真是dom

  ```
  // 创建 dom 元素
  function createElement(vdom) {
      // 如果 vdom 是字符串或者数字类型，则创建文本节点，比如“Hello World”
      if (typeof vdom === 'string' || typeof vdom === 'number') {
          return doc.createTextNode(vdom);
      }

      const {tag, props, children} = vdom;

      // 1. 创建元素
      const element = doc.createElement(tag);

      // 2. 属性赋值
      setProps(element, props);

      // 3. 创建子元素
      // appendChild 在执行的时候，会检查当前的 this 是不是 dom 对象，因此要 bind 一下
      children.map(createElement)
              .forEach(element.appendChild.bind(element));

      return element;
  }

  // 属性赋值
  function setProps(element, props) {
      for (let key in props) {
          element.setAttribute(key, props[key]);
      }
  }


  ```
