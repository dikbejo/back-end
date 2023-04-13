const mysql = require('mysql2');
let jn = "DB_DEFAULT";

const getCon = (jnDb) => {
    dbnya = jnDb || jn ;
    // console.log(dbnya);
    let db = JSON.parse(process.env[dbnya]);
    const dbPool = mysql.createPool({
        host: db.DB_HOST,
        user: db.DB_USERNAME,
        password: db.DB_PASSWORD,
        database: db.DB_NAME,
        port: db.DB_PORT

    });
    return dbPool.promise();
}

module.exports = getCon;
