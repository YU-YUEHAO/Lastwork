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
  var ProposalName=  contract.getProposalName(PID);
  var ProposalCtx=  contract.getProposalCtx(PID);
 var  ProposalVCnt=  contract.getProposalVCnt(PID);
  var ProposalLimit=  contract.getProposalLimit(PID);
  var res.json(que,ProposalName,ProposalCtx,ProposalVCnt,ProposalLimit)
})


module.exports = router;
