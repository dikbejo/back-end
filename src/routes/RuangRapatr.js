const express = require('express');
const ctr = require('../controller/RuangRapatCtr');
const router = express.Router();
const pToken = require('../middleware/VerifyToken');

router.get("/getRuangRapats",ctr.getRuangRapats);
router.post("/insertRuangRapat",ctr.insertRuangRapat);
router.get("/getRuangRapatById",ctr.getRuangRapatById);
router.post("/updateRuangRapat",ctr.updateRuangRapat);
router.post("/deleteRuangRapat",ctr.deleteRuangRapat);


module.exports = router;