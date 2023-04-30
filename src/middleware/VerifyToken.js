const  jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    console.log('authHeader : ' + authHeader);
    if (authHeader == null ) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    console.log('token : ' + token);
    if (token == null) return res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded) =>{
        if(err) return res.sendStatus(403);
        req.iduser = decoded.iduser;
        next();
    });
}
module.exports={verifyToken}