
// //server create
// const http=require("http");
// const hostname=`127.0.0.1`
// const port=3000;
// const myserver=http.createServer((req,res)=>{
//     res.end("<h1> hello i'm  your frist server <h1/>")
// });
// myserver.listen(port,hostname,()=>{
//     console.log(`server is running sucessfully at http://${hostname}:${port}`);
    
// })

//create server
const http=require("http");
const hostname=`127.0.0.1`
const port=3000;
const myserver=http.createServer((req,res)=>{
    res.writeHead(202,{'content-Type':'text/plain'});
    res.write("<h1>hello </h1>");
    res.end();
});
myserver.listen(port,hostname,()=>{
    console.log(`server is running sucessfully at http://${hostname}:${port}`);
    
})