const express = require('express');
const ctr = require('../controller/RuangRapatCtr');
const router = express.Router();
const pToken = require('../middleware/VerifyToken');

router.get("/getRuangRapats",ctr.getRuangRapats);



module.exports = router;