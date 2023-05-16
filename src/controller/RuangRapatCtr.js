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
module.exports={getRuangRapats}