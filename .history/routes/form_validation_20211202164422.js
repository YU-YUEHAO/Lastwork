const { query } = require('express');
var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var superStars = new Array(6);
  que= await contract.queryVoting();
  ProposalName= await contract.getProposalName();
  ProposalCtx= await contract.getProposalCtx();
  ProposalVCnt= await contract.getProposalVCnt();
  ProposalLimit= await contract.getProposalLimit();
  PID= await contract.getPID();
  superStars[0]=que;
  superStars[1]=ProposalName;
  superStars[2]=ProposalCtx;
  superStars[3]=tProposalVCnt;
  superStars[4]=ProposalLimit;
  superStars[5]=PID;

  res.render('form_validation',{superStars:superStars});
});


module.exports = router;
