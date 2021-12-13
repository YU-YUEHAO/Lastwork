var express = require('express');
var router = express.Router();
// var contract =require('../web3/reweb3');
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x078d51D7DE304A23c5FE169442B6486251b677F5');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('responsive_table');
});
router.post("/select",(req,res)=>{
  var superStars = []
  console.log(req.body.ppid);
  console.log(req.body.account);
  var people = {
    ProposalName:'',
    ProposalCtx:'',
    ProposalVCnt:'',
    que:'',
    ProposalLimit:''
  }
  let _pId=req.body.ppid;
  address='0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8';
  console.log(1)
  console.log(typeof(address))
  console.log(2)
  console.log(typeof)
  myContract.methods.queryVoting(_pId,address).call({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
  .then((que)=>{
    console.log(que);
    people.que=que;
    myContract.methods.getProposalName(_pId).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then((ProposalName)=>{
      console.log(ProposalName);
      people.ProposalName = ProposalName
          // res.json(ProposalName);
        }).then(
          myContract.methods.getProposalCtx(_pId).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
          .then((ProposalCtx)=>{
            console.log(ProposalCtx);
            people.ProposalCtx = ProposalCtx
          }).then(
            myContract.methods.getProposalVCnt(_pId).call()
           .then((ProposalVCnt)=>{
           console.log(ProposalVCnt);
           //  res.json(ProposalVCnt);
            people.ProposalVCnt = ProposalVCnt
          }).then(
            myContract.methods.getProposalLimit(_pId).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
            .then((ProposalLimit)=>{
              console.log(ProposalLimit);
              //  res.json(ProposalLimit);
              people.ProposalLimit = ProposalLimit
              superStars.push(people);
              console.log(superStars);
              // res.json({superStars:superStars});
              res.json(superStars)
            })
          )
          )
        )

  });
    
  
})


module.exports = router;
