var EventEmitter = require('events').EventEmitter;

// 创建类
var MyClass = function(){};

// 所以MyClass的实例都具备了事件的功能
MyClass.prototype = EventEmitter.prototype;

// 测试
// 1.创建对象
var myClass = new MyClass();
// 2.添加事件
myClass.on("aaa", ()=>{
    console.log("触发了aaa事件");
});
// 3.触发事件
myClass.emit("aaa");