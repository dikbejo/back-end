const express = require('express');
const ctr = require('../controller/RuangRapatCtr');
const router = express.Router();
const pToken = require('../middleware/VerifyToken');

router.get("/getRuangRapats",ctr.getRuangRapats);
router.post("/insertRuangRapat",ctr.insertRuangRapat);
router.get("/getRuangRapatById",ctr.getRuangRapatById);
router.post("/updateRuangRapat",ctr.updateRuangRapat);
router.post("/deleteRuangRapat",ctr.deleteRuangRapat);

router.get("/getRuangRapatsAuth",pToken.verifyToken,ctr.getRuangRapats);
router.post("/insertRuangRapatAuth",pToken.verifyToken,ctr.insertRuangRapat);
router.get("/getRuangRapatByIdAuth",pToken.verifyToken,ctr.getRuangRapatById);
router.post("/updateRuangRapatAuth",pToken.verifyToken,ctr.updateRuangRapat);
router.post("/deleteRuangRapatAuth",pToken.verifyToken,ctr.deleteRuangRapat);
module.exports = router;