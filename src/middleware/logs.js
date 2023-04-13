const logRequest = (req,res,next)=>{
    console.log('Ada request ke path ',req.path);
    next();
};

module.exports = logRequest;