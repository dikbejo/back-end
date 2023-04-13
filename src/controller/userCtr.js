const getAllUsers = (req,res)=>{
    res.json({
        message: 'GET users success'
    })
}

const createUsers = (req,res)=>{
    console.log(req.body);
    res.json({
        message: 'CREATE users success',
        data: req.body
    })
}

module.exports={
    getAllUsers,
    createUsers
}