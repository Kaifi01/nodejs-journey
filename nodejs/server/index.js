const http=require("http");
const fs=require("fs");
const port=3000;
const hostname="127.0.0.1"
const server=http.createServer((req,res)=>{
     const handlefile=(statuscode,locationfle)=>{
   fs.readFile(locationfle,"utf-8",(err,data)=>{
        if (err) {
              console.log(err);
              
        }else{
            res.writeHead(statuscode,{"content-type":"text/html" })
         res.write(data);
         res.end()
        }
    });
     }

   if (req.url==="/") {
 
  handlefile(202,"./views/index.html")   
   }else if (req.url==="/about") {
       handlefile(202,"./views/about.html")
   }else if(req.url==="/contact"){
    handlefile(202,"./views/contact.html")
   }else {
    handlefile(404,"./views/error.html")
   }
})
server.listen(port,()=>{
    console.log(`server is running at http://${hostname}:${port} `);
    
})