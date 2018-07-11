console.log(1);
process.nextTick(()=>{
    console.log(4);
});
console.log(2);
console.log(3);