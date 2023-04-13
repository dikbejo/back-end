require('dotenv').config()
const express = require('express');
const userRouter = require('./routes/users')
const mdLogs = require('./middleware/logs');

const app = express();
//use : menerima post,get digunakan utk midleware

app.use(mdLogs);
app.use(express.json());

app.use('/users',userRouter);
app.get("/",(req,res,next)=>{
    res.send("Hello get..");
});
app.post("/",(req,res,next)=>{
    res.send("Hello post..");
});
app.listen(process.env.PORT,()=>{
    console.log(`Server running di port ${process.env.PORT}`);
})