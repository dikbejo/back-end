const model = require('../models/UserModel');
const getUsers = async (req, res) => {
    try {
        const [data] = await model.getUsers();
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
const getUserById = async (req, res) => {
    try {
        const {body} = req;
        const [data] = await model.getUserById(body.iduser);
        res.json({
            msg: 'GET User success',
            data: data[0]
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}
const insertUser = async(req,res)=>{
    
    try {
        const {body} = req;
        if(!body.data) return res.status(400).json({msg: "Gagal , data kosong"})
        if(!body.data.iduser) return res.status(400).json({msg: "Gagal , id user kosong"})
        const data = await model.insertUser(body.data);
        res.json({
            msg: 'Insert users success'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const updateUser = async(req,res)=>{
    
    try {
        const {body} = req;
        if(!body.data) return res.status(400).json({msg: "Gagal , data kosong"})
        if(!body.data.iduser) return res.status(400).json({msg: "Gagal , id user kosong"})
        const data = await model.updateUser(body.data);
        const msg = data[0];
        res.json({
            // msg: 'Update users success'
            msg
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const updateUserPassword = async(req,res)=>{

    try {
        const {body} = req;
        if(!body.iduser) return res.status(400).json({msg: "Gagal , id user kosong"})
        const data = await model.updateUserPassword(body.password,body.iduser);
        const msg = data[0];
        res.json({
            // msg: 'Update users success'
            msg
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const deleteUser = async(req,res)=>{
    
    try {
        const {body} = req;
         if(!body.iduser) return res.status(400).json({msg: "Gagal , id user kosong"})
        const data = await model.deleteUserById(body.iduser);
        const msg = data[0];
        // console.log(data);
        res.json({
            // msg: 'Delete users success'
            msg
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

module.exports={
    getUsers,getUserById, insertUser,updateUser,updateUserPassword,deleteUser
}