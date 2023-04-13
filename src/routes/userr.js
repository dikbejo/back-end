const express = require('express');

const userCtr = require('../controller/userCtr');
const loginCtr = require('../controller/LoginCtr');

const router = express.Router();

router.get("/",loginCtr.getAllUsers);

module.exports = router;