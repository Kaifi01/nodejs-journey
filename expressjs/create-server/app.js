const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send(` <h1>i am a get request at home route </h1>`)
    res.end();
})
app.get("/register",(req,res)=>{
    res.send(`<h1>i am a get request at register route</h1>`)
    res.end();
})
app.get("/login",(req,res)=>{
    res.send(`<h1>i am a get request at login route</h1>`)
    res.end();
})
app.use((req,res)=>{
    res.send(`<h1>404 page not found</h1>`)
})
module.exports=app;