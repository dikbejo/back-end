const jwt = require("jsonwebtoken");
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
        const [data] = await model.validateUser(body.iduser,body.password,body.thang);
        if(data.length < 1) return res.status(400).json({msg: "Gagal Login"})
        res.json({
            msg: 'Login sukses',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}
module.exports = {
    getAllUsers,login
}