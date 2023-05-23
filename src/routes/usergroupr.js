const express = require('express');

const userCtr = require('../controller/UserGroupCtr');

const router = express.Router();

router.get("/getUserGroups",userCtr.getUserGroups);
router.get("/getUserGroupById",userCtr.getUserGroupById);
router.post("/insertUserGroup",userCtr.insertUserGroup);
router.post("/updateUserGroup",userCtr.updateUserGroup);
router.post("/deleteUserGroup",userCtr.deleteUserGroup);

module.exports = router;