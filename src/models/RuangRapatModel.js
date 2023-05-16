const getCon = require('../config/database');

const getRuangRapats = () => {
    try {
        cn = getCon();
        const SQLQuery = 'SELECT * FROM t_rapat_ruang order by kdrapat';
        return cn.execute(SQLQuery);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {getRuangRapats}