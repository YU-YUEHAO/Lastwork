var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.body.pid);
  // console.log(req.body.address)
  //  var ProposalName=contract.getProposalName(req.body.pid);
  //  var ProposalCtx=contract.getProposalCtx(req.body.pid);
  //  var Proposalquery=contract.queryVoting(req.body.pid,req.body.address);
  //  var getProposalVCnt=contract.getProposalVCnt(req.body.pid);
  //  var ProposalLimit=contract.getProposalLimit(req.body.pid);
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
  res.render('responsive_table');
});


module.exports = router;
