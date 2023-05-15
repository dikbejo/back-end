const jwt = require('jsonwebtoken');

const bcrypt =require("bcrypt");

const model = require('../models/LoginModel');


const getAllUsers = async (req, res) => {
    try {
       
        const [data] = await model.getAllUsers();

        res.json({
            msg: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const login = async(req,res) => {
    const {body} = req;
    try {
        console.log(body);
        if(!body.iduser) return res.status(400).json({msg: "Gagal Login, isi userid"})
        if(!body.password) return res.status(400).json({msg: "Gagal Login, isi password"})
        if(!body.thang || body.thang.length<4) return res.status(400).json({msg: "Gagal Login, isi Tahun Anggaran"})
        const [data] = await model.validateUser(body.iduser,body.password,body.thang);
        if(data.length < 1) return res.status(400).json({msg: "Gagal Login"})
        const iduser = data[0].iduser;
        const nmuser = data[0].nmuser;
        const idusergroup = data[0].idusergroup;
        const accessToken = jwt.sign({iduser,nmuser,idusergroup},process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn: '20s'});
        const refreshToken = jwt.sign({iduser,nmuser,idusergroup},process.env.REFRESH_TOKEN_SECRET_KEY,{expiresIn: '1d'});
        await model.updateRefreshToken(body.iduser,refreshToken);
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: false
        })
        
        // res.json({
        //     msg: 'Login sukses',
        //     data: data
        // })
        res.json({
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Server Error',
            serverMessage: error,
        })
    }
}

const refreshToken = async(req,res) =>{
    try {
        const refreshToken = req.cookies.refreshToken;
        // console.log('dari refreshtoken, req.cookies : ' + json(req.cookies));
        if (!refreshToken) return res.sendStatus(401);
        const [user] = await model.getUserByRefreshToken(refreshToken);
        if (!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN,(err,decoded) =>{
            if(err) return res.sendStatus(403);
            const iduser = user[0].iduser;
            const nmuser = user[0].nmuser;
            const idusergroup = user[0].idusergroup;
            const accessToken = jwt.sign({iduser,nmuser,idusergroup},process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn: '15s'});
            res.json({accessToken});
        });
    } catch (error) {
        console.log(error);
    }
}

const logout = async(req,res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const [user] = await model.getUserByRefreshToken(refreshToken);
    if (!user[0]) return res.sendStatus(204);
    await model.updateRefreshToken(user[0].iduser,null);
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}




module.exports = {
    getAllUsers,login
    ,refreshToken,logout
}