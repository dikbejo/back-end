const jwt = require("jsonwebtoken");
const bcrypt =require("bcrypt");

const model = require('../models/LoginModel');


const getAllUsers = async (req, res) => {
    try {
       
        const [data] = await model.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const login = async(req,res) => {
    
}
module.exports = {
    getAllUsers
}