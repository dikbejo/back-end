require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userr')
const loginRouter = require('./routes/loginr')
const mdLogs = require('./middleware/logs');
const pToken = require('./middleware/VerifyToken');
const cors = require('cors')


const app = express();
//use : menerima post,get digunakan utk midleware

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(mdLogs);
app.use(cookieParser());
app.use(express.json());

// app.use('/user',pToken.verifyToken,userRouter);
app.use('/login',loginRouter);
app.get("/",(req,res,next)=>{
    res.send("Hello get..");
});
app.post("/",(req,res,next)=>{
    res.send("Hello post..");
});
app.listen(process.env.PORT,()=>{
    console.log(`Server running di port ${process.env.PORT}`);
})