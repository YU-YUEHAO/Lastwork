const { query } = require('express');
var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var superStars = new Array(6);
  query= await contract.queryVoting();
  ProposalName= await contract.getProposalName();
  ProposalCtx= await contract.getProposalCtx();
  tProposalVCnt= await contract.getProposalVCnt();
  ProposalLimit= await contract.getProposalLimit();
  PID= await contract.getPID();
  superStars[0]=query;
  superStars[0]=query;
  superStars[0]=query;
  superStars[0]=query;
  superStars[0]=query;
  superStars[0]=query;

  res.render('form_validation',{query:query,ProposalName:ProposalName});
});


module.exports = router;
