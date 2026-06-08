const express=require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

// //post json
// app.post("/user",(req,res)=>{
//  const name=req.body.name;
//  const age=req.body.age;
//  res.send(`welcome ${name} and age ${age}`)
// })
//send and recived from data


app.post("/register",(req,res)=>{
      const fullname=req.body.fullname;
      const age=req.body.age;
  res.send(`<h1> hello  ${fullname} and your age is ${age} </h1>`)
})

app.get("/register",(req,res)=>{
  
 res.sendFile(__dirname+"/index.html")
})

module.exports=app;