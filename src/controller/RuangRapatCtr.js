const model = require('../models/RuangRapatModel');

const getRuangRapats = async (req, res) => {
    try {
       
        const [data] = await model.getRuangRapats();

        res.json({
            msg: 'GET Ruang Rapat success',
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server Error',
            serverMessage: error,
        })
    }
}

// const insertRuangRapat = async (req, res) => {
//     const {body} = req;
//     console.log('insertRuangRapat');
//     console.log(body);
//     res.json({
//         msg: 'Insert Ruang Rapat belum jadi',
 
//     })
// }
const getRuangRapatById = async (req, res) => {
    try {
        const {body} = req;
        const [data] = await model.getRuangRapatById(body.kdrapat);
        res.json({
            msg: 'GET Ruang rapat success',
            data: data[0]
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const insertRuangRapat = async(req,res)=>{
    
    try {
        const {body} = req;
        console.log(body.data);
        if(!body.data) return res.status(400).json({msg: "Gagal , data kosong"})
        if(!body.data.nmrapat) return res.status(400).json({msg: "Gagal , nama ruang rapat kosong"})
        if(!body.data.letak) return res.status(400).json({msg: "Gagal , letak ruang rapat kosong"})
        if(!body.data.luas) return res.status(400).json({msg: "Gagal , luas ruang rapat kosong"})
        
        const data = await model.insertRuangRapat(body.data);
        res.json({
            msg: 'Insert Ruang rapat success'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const updateRuangRapat = async(req,res)=>{
    try {
        const {body} = req;
        if(!body.data) return res.status(400).json({msg: "Gagal , data kosong"})
        if(!body.data.kdrapat) return res.status(400).json({msg: "Gagal , id ruang rapat kosong"})
        if(!body.data.nmrapat) return res.status(400).json({msg: "Gagal , nama ruang rapat kosong"})
        const data = await model.updateRuangRapat(body.data);
        // console.log(data);
        // console.log(data[0].changedRows);
        const msg = data[0];
        // console.log(hasil);
        res.json({
            // msg: 'Update Ruang rapat  success'
            msg
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server Errorr',
            serverMessage: error,
        })
    }
}

const deleteRuangRapat = async(req,res)=>{
    
    try {
        const {body} = req;
        if(!body.kdrapat) return res.status(400).json({msg: "Gagal , id ruang rapat kosong"})
        const data = await model.deleteRuangRapatById(body.kdrapat);
        const msg = data[0];
        res.json({
            // msg: 'Delete ruang rapat success'
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
    getRuangRapats,getRuangRapatById,insertRuangRapat,updateRuangRapat,deleteRuangRapat
}
