var EventEmitter = require('events').EventEmitter;

var e = new EventEmitter();
e.on('event1', ()=>{
    console.log("事件1执行")
});

e.on('event2', ()=>{
    console.log("事件2执行")
});

e.emit('event1');
e.emit('event2');