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
  res.render('responsive_table');
});
router.post("/select",(req,res)=>{
 var  que=contract.queryVoting(PID);
  ProposalName=  contract.getProposalName(PID);
  ProposalCtx=  contract.getProposalCtx(PID);
  ProposalVCnt=  contract.getProposalVCnt(PID);
  ProposalLimit=  contract.getProposalLimit(PID);
  res.json(que,ProposalName,ProposalCtx,ProposalVCnt,ProposalLimit)
})


module.exports = router;
