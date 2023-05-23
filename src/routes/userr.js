const express = require('express');

const userCtr = require('../controller/UserCtr');

const router = express.Router();

router.get("/getUsers",userCtr.getUsers);
router.get("/getUserById",userCtr.getUserById);
router.post("/insertUser",userCtr.insertUser);
router.post("/updateUser",userCtr.updateUser);
router.post("/deleteUser",userCtr.deleteUser);
router.post("/updateUserPassword",userCtr.updateUserPassword);

module.exports = router;