const getCon = require('../config/database');

const ruangRapatKosong={ kdrapat: null, nmrapat: "", letak: "", luas: "0", kapasitas: "0", fasilitas: "", unit: "", kdaktif: "1", gambar: "" };
const getRuangRapats = () => {
    try {
        cn = getCon();
        // const SQLQuery = ;
        return cn.execute('SELECT * FROM t_rapat_ruang order by kdrapat');
    } catch (e) {
        console.log(e);
    }
}
const getRuangRapatById = (kd) => {
    try {
        cn = getCon();
        return cn.execute(`SELECT * FROM t_rapat_ruang where kdrapat=?` ,[kd]);
    } catch (e) {
        console.log(e);
    }
}
const tes = () =>{
    console.log('tes');
}
const insertRuangRapat = (dtm) => {
    const dt = {...ruangRapatKosong,...dtm};
    try {
        cn = getCon();
        return cn.execute(`INSERT INTO t_rapat_ruang (nmrapat, letak, luas, kapasitas, fasilitas, unit, kdaktif, gambar) VALUES (?, ?, ?,?, ?, ?,?, ?)`,
        [dt.nmrapat, dt.letak, dt.luas, dt.kapasitas, dt.fasilitas, dt.unit, dt.kdaktif, dt.gambar]);
    } catch (e) {
        console.log(e);
    }
}
const updateRuangRapat = (dtm) => {
    try {
        const dt = {...ruangRapatKosong,...dtm};
        cn = getCon();
        return cn.execute(`UPDATE t_rapat_ruang set nmrapat=?, letak=?, luas=?, kapasitas=?, fasilitas=?,
         unit=?, kdaktif=?, gambar=? where kdrapat=?` ,
        [dt.nmrapat, dt.letak, dt.luas, dt.kapasitas, dt.fasilitas, dt.unit, dt.kdaktif, dt.gambar,dt.kdrapat]);
    } catch (e) {
        console.log(e);
    }
}
const deleteRuangRapatById = (kd) => {
    try {
        cn = getCon();
        return cn.execute(`DELETE FROM t_rapat_ruang where kdrapat=?` ,[kd]);
    } catch (e) {
        console.log(e);
    }
}
module.exports = {getRuangRapats,getRuangRapatById,insertRuangRapat,updateRuangRapat,deleteRuangRapatById,tes}