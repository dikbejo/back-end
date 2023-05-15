const  jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY,(err,decoded) =>{
        if(err) return res.sendStatus(403);
        req.iduser = decoded.iduser;
        next();
    });
}
module.exports={verifyToken}