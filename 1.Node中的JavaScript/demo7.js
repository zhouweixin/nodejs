var myBuffer = Buffer.from('==ii1j2i3h1i23h', 'base64');
console.log(myBuffer);
require('fs').writeFile('logo.png', myBuffer, (err)=>{
    if(err){
        console.log(err);
    }
});