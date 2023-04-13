const express = require('express');

const loginCtr = require('../controller/LoginCtr');

const router = express.Router();

router.post("/",loginCtr.login);
router.get("/getAllUsers",loginCtr.getAllUsers);

module.exports = router;