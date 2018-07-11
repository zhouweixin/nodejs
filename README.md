# nodejs学习之旅
---

## 1 node中的JavaScript

### 全局对象

- 在浏览器中 **全局对象**只有 **window**
- 在Node中 **全局对象**只有 **process**

*所有全局执行上下文中的内容都在全局对象中*

【请看demo1的实例】

>$ node demo1
1
2
3
4

---

### 模块

- 模块系统的三个核心全局对象：require, module, exports
- 绝对模块：Node安装目录中node_modules里的模块，如require('http')
- 相对模块：类似于相对路径，需要以./开头

【相对模块：请看demo2的实例】

>$ node demo2_c
aaa
bbb

- 模块暴露API：让模块成为require的返回值

1. 暴露属性和函数

【请看demo3的实例】

>$ node demo3_test
zhou.name = zhouweixin
zhou.text = 我是周威信
zhou.age = 18

2. 暴露类

【请看demo4的实例】

>$ node demo4_test.js
我的名字是: 张三
我的名字是: 李四
---

### 事件: 是Node非阻塞设计的重要体现

- 事件分发: EventEmitter

【请看demo5的实例】

>$ node demo5
事件1执行
事件2执行

【类的事件分发:请看demo6的实例】

>$ node demo6
触发了aaa事件
---










