const getCon = require('../config/database');

const userKosong = {iduse:null, nmuser:'', fullname:'', nmalias:'', nip:'', pangkat:'', golongan:'',
     password:'', kdso:'', email:'', nohp:'', kdlevel:'', idusergroup:'', 
    jabatan:'', kdeselon:'', kdpeg:'', profilepic:''};

const getUsers = () => {
    try {
        cn = getCon();// koneksi ke DB default DSW
        // cn = getCon("DB_REF_2023");//koneksi ke DB DB_REF_2023
        const SQLQuery = 'SELECT * FROM t_user ';
        return cn.execute(SQLQuery);
    } catch (e) {
        console.log(e);
    }
}
const getUserById = (iduser) => {
    try {
        cn = getCon();
        return cn.execute(`SELECT * FROM t_user where iduser=?` ,[iduser]);
    } catch (e) {
        console.log(e);
    }
}
const insertUser = (dtm) => {
    try {
        const dt = {...userKosong,...dtm};
        cn = getCon();
        return cn.execute(`INSERT INTO t_user
        (iduser, nmuser, fullname, nmalias, nip, pangkat, golongan, password, kdso, email, nohp, kdlevel, idusergroup, 
        jabatan, kdeselon, kdpeg, profilepic)
        VALUES(?, ?, ?, ?, ?, ?, ?, md5(?), ?, ?, ?, ?, ?, ?, ?, ?, ?)` ,
        [dt.iduser, dt.nmuser, dt.fullname, dt.nmalias, dt.nip, dt.pangkat, dt.golongan, dt.password, dt.kdso, dt.email, dt.nohp, dt.kdlevel, dt.idusergroup, 
        dt.jabatan, dt.kdeselon, dt.kdpeg, dt.profilepic]);
    } catch (e) {
        console.log(e);
    }
}
const updateUser = (dtm) => {
    try {
        const dt = {...userKosong,...dtm};
        cn = getCon();
        return cn.execute(`UPDATE t_user set
        nmuser=?, fullname=?, nmalias=?, nip=?, pangkat=?, golongan=?, kdso=?, email=?, nohp=?, kdlevel=?, idusergroup=?, 
        jabatan=?, kdeselon=?, kdpeg=?, profilepic=? where iduser=?` ,
        [dt.nmuser, dt.fullname, dt.nmalias, dt.nip, dt.pangkat, dt.golongan, dt.kdso, dt.email, dt.nohp, dt.kdlevel, dt.idusergroup, 
        dt.jabatan, dt.kdeselon, dt.kdpeg, dt.profilepic,dt.iduser]);
    } catch (e) {
        console.log(e);
    }
}
const updateUserPassword = (password,iduser) => {
    try {
        cn = getCon();
        return cn.execute(`UPDATE t_user set password=md5(?) where iduser=?` ,
        [password,iduser]);
    } catch (e) {
        console.log(e);
    }
}
const deleteUserById = (iduser) => {
    try {
        cn = getCon();
        return cn.execute(`DELETE FROM t_user where iduser=?` ,[iduser]);
    } catch (e) {
        console.log(e);
    }
}
module.exports = {getUsers,getUserById,insertUser,updateUser,updateUserPassword,deleteUserById}