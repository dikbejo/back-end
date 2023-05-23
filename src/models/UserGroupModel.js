const getCon = require('../config/database');

const getUserGroups = () => {
    try {
        cn = getCon();// koneksi ke DB default DSW
        // cn = getCon("DB_REF_2023");//koneksi ke DB DB_REF_2023
        const SQLQuery = 'SELECT * FROM t_user_group ';
        return cn.execute(SQLQuery);
    } catch (e) {
        console.log(e);
    }
}
const getUserGroupById = (iduser) => {
    try {
        cn = getCon();
        return cn.execute(`SELECT * FROM t_user_group where idusergroup=?` ,[iduser]);
    } catch (e) {
        console.log(e);
    }
}
const insertUserGroup = (dt) => {
    try {
        cn = getCon();
        return cn.execute(`INSERT INTO t_user_group
        (idusergroup, nmusergroup, menu)
        VALUES(?, ?, ?)` ,
        [dt.idusergroup, dt.nmusergroup, dt.menu]);
    } catch (e) {
        console.log(e);
    }
}
const updateUserGroup = (dt) => {
    try {
        cn = getCon();
        return cn.execute(`UPDATE t_user_group set
        nmusergroup=?, menu=? where idusergroup=?` ,
        [dt.nmusergroup, dt.menu,dt.idusergroup]);
    } catch (e) {
        console.log(e);
    }
}
const deleteUserGroupById = (iduser) => {
    try {
        cn = getCon();
        return cn.execute(`DELETE FROM t_user_group where idusergroup=?` ,[iduser]);
    } catch (e) {
        console.log(e);
    }
}
module.exports = {getUserGroups,getUserGroupById,insertUserGroup,updateUserGroup,deleteUserGroupById}