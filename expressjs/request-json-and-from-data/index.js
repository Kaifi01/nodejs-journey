const app=require('./app');
const PORT=3001;
const hostname='127.0.0.1';

app.listen(PORT,hostname,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`);
    
})