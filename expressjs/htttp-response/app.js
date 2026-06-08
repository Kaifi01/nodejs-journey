const express=require('express');
const userrouter=require('./user.router')
const app=express();
app.use("/api/user",userrouter);
app.use("/register",(req,res)=>{
//   res.status(200).json({
//     message:"hi i am registation page",
//     statuscode:200
//   });
//   res.redirect("/login")
res.statusCode=202;
res.sendFile(__dirname+"/views/register.html")

})
app.use("/login",(req,res)=>{
    // res.cookie("name","kaifi");
    // res.cookie("age","30");
    res.append("id","130000")
    res.end()
})
app.get("/",(req,res)=>{
     res.statusCode=202;
     res.sendFile(__dirname+"/views/index.html")
})

app.use((req,res)=>{
    res.send(`404 !! not a valid`)
})

module.exports=app;