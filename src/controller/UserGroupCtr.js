const model = require('../models/UserGroupModel');
const getUserGroups = async (req, res) => {
    try {
        const [data] = await model.getUserGroups();
        res.json({
            msg: 'GET all user group success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}
const getUserGroupById = async (req, res) => {
    try {
        const {body} = req;
        const [data] = await model.getUserGroupById(body.idusergroup);
        res.json({
            msg: 'GET User Group success',
            data: data[0]
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}
const insertUserGroup = async(req,res)=>{
    
    try {
        const {body} = req;
        if(!body.data) return res.status(400).json({msg: "Gagal , data kosong"})
        if(!body.data.idusergroup) return res.status(400).json({msg: "Gagal , idusergroup kosong"})
        if(!body.data.nmusergroup) return res.status(400).json({msg: "Gagal , nmusergroup kosong"})
        if(!body.data.menu) return res.status(400).json({msg: "Gagal , menu kosong"})
        const data = await model.insertUserGroup(body.data);
        res.json({
            msg: 'Insert user group success'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const updateUserGroup = async(req,res)=>{
    
    try {
        const {body} = req;
        if(!body.data) return res.status(400).json({msg: "Gagal , data kosong"})
        if(!body.data.idusergroup) return res.status(400).json({msg: "Gagal , id user kosong"})
        const data = await model.updateUserGroup(body.data);
        const msg = data[0];
        res.json({
            // msg: 'Update user group  success'
            msg
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const deleteUserGroup = async(req,res)=>{
    
    try {
        const {body} = req;
        if(!body.idusergroup) return res.status(400).json({msg: "Gagal , id user group kosong"})
        const data = await model.deleteUserGroupById(body.idusergroup);
        const msg = data[0];
        res.json({
            // msg: 'Delete user group success'
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
    getUserGroups,getUserGroupById,insertUserGroup,updateUserGroup,deleteUserGroup
}