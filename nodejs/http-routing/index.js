const http=require("http");
const fs=require("fs")
const port=3000;
const hostname="127.0.0.1";
const server=http.createServer((req,res)=>{
 const handlerecivefile=(statuscode,filelocation)=>{
fs.readFile(filelocation,(err,data)=>{
       res.writeHead(statuscode,{"content-type":"text/html"});
       res.write(data);
       res.end()
     })
 }

    if (req.url==='/') {
     handlerecivefile(200,"./views/index.html")
    } else if(req.url==='/about'){
       handlerecivefile(200,"./views/about.html")

       
    } else if (req==="/contact") {
     handlerecivefile(200,"./views/contact.html")
        
    }  else{
    handlerecivefile(404,"./views/error.html")
    }
})
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
    
})