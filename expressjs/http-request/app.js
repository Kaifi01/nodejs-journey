const express=require('express');

const app=express();
//query paramenter
// app.get("/",(req,res)=>{
//     const {id,name}=req.query;
//     res.send(`<h1> student id is :${id} and name is ${name} </h1>`)
// })

//route parameter
// app.get("/userid/:id/userage/:age",(req,res)=>{
//    const {id,age}=req.params;
//    res.send(`student id is ${id} and age is ${age}`)
// })

//headers
app.get("/",(req,res)=>{
    const id=req.header('id');
    const name=req.header('name');
    res.send(`stude id is ${id} and name is ${name}`)
})


module.exports=app;