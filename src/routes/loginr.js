const express = require('express');
const loginCtr = require('../controller/LoginCtr');
const router = express.Router();
const pToken = require('../middleware/VerifyToken');

router.post("/",loginCtr.login);
router.get("/getAllUsers",pToken.verifyToken,loginCtr.getAllUsers);
router.get("/refreshToken",loginCtr.refreshToken);
router.delete("/logout",loginCtr.logout);


module.exports = router;