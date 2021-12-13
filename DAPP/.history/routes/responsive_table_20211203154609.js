var express = require('express');
var router = express.Router();
// var contract =require('../web3/reweb3');
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x078d51D7DE304A23c5FE169442B6486251b677F5');
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
 myContract.methods.queryVoting(_pId,address).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
 .then((que)=>{
console.log(que);
res.json(que);
 });

 myContract.methods.getProposalName(_pId).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then((ProposalName)=>{
        console.log(ProposalName);
        res.json(ProposalName);
    })
    myContract.methods.getProposalCtx(_pId).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then((ProposalCtx)=>{
       console.log(ProposalCtx);
       res.json(ProposalCtx);
    })
  myContract.methods.getProposalVCnt(_pId).call()
 .then((ProposalVCnt)=>{
    console.log(ProposalVCnt);
     res.json(ProposalVCnt);
 })
  var ProposalLimit=  contract.getProposalLimit(PID);
  res.json(que,ProposalName,ProposalCtx,ProposalVCnt,ProposalLimit)
})


module.exports = router;
