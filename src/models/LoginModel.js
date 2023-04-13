const getCon = require('../config/database');

const getAllUsers = () => {
    try {
        cn = getCon();
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
module.exports = {
    getAllUsers,validateUser
}