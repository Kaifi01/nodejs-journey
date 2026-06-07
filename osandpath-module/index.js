//os and path

//os
// const os=require("os");
// const {freemem,totalmem}=require('os')
// console.log(os);

// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// // console.log(freemem());
// console.log(totalmem());

// console.log(_dirname);

// console.log(_filename);



//path
const path =require("path");

// console.log(path);
//extension name
const extentionname=path.extname("index.html");

// console.log(extentionname);

const joinName=path.join(__dirname+"/views");
console.log(joinName);
