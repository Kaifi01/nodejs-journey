const express=require("express");
const app=express();
const userRouter=require('./user.route')

app.use("/api/user",userRouter);
app.use("/",(req,res)=>{
    res.send(`<h1>this is home router <h1>`)
})
app.use("/",(req,res)=>{
    res.send(`<h1>404 !!! not a valid url  </h1>`)
})

module.exports=app;