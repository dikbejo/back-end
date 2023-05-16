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

const insertRuangRapat = async (req, res) => {
    const {body} = req;
    console.log('insertRuangRapat');
    console.log(body);
    res.json({
        msg: 'Insert Ruang Rapat belum jadi',
 
    })
}
module.exports={getRuangRapats,insertRuangRapat}