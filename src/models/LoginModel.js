const getCon = require('../config/database');

const getAllUsers = () => {
    try {
        cn = getCon();// koneksi ke DB default DSW
        // cn = getCon("DB_REF_2023");//koneksi ke DB DB_REF_2023
        const SQLQuery = 'SELECT * FROM t_user';
        return cn.execute(SQLQuery);
    } catch (e) {
        console.log(e);
    }
}
const validateUser = (iduser, password, thang) => {
    try {
        cn = getCon();
        const SQLQuery = `SELECT * FROM t_user WHERE iduser='${iduser}' AND password=md5('${password}')`;
        return cn.execute(SQLQuery);
    } catch (e) {
        console.log(e);
    }
}
  
const updateRefreshToken = (iduser,token) => {
    cn = getCon();
    return cn.execute(`Update t_user set refreshtoken=?  where iduser=?`,[token,iduser]);
}

const getUserByRefreshToken = (token) => {
    cn = getCon();
    return cn.execute(`SELECT * FROM t_user WHERE refreshtoken=?`,[token]);
}

module.exports = {
    getAllUsers,validateUser,updateRefreshToken,getUserByRefreshToken
}