var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  s= await contract.queryVoting()
  s= await contract.getProposalName()
  s= await contract.getProposalCtx()
  s= await contract.getProposalVCnt()
  getProposalLimit
  res.render('form_validation');
});


module.exports = router;
