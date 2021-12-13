var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body.pid);
  console.log(req.body.address)
   var ProposalName=contract.getProposalName(req.body.pid);
   var ProposalCtx=contract.getProposalCtx(req.body.pid);
   var Proposalquery=contract.queryVoting();
   var getProposalVCnt=contract.getProposalVCnt();
   var ProposalLimit=contract.getProposalLimit();
  res.render('responsive_table');
});


module.exports = router;
