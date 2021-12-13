var express = require('express');
var router = express.Router();
// var contract =require('../web3/reweb3');
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x078d51D7DE304A23c5FE169442B6486251b677F5');
/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('form_validation');
  // web3.eth.getAccounts(console.log);
});

router.post('/gethash',(req,res)=>{
    console.log(req.body);
    console.log(req.body.pid1);
    console.log(req.body.account);
   console.log(typeof(req.body.account));
   myContract.methods.getTxHash(req.body.pid1,req.body.pname1,req.body.pctx1).call({from:req.body.account})
    .then((hash)=>{
      console.log(hash);
      res.json(hash);
    })
})
router.post('/dovoting',(req,res)=>{
  console.log(req.body.ppid2);
  console.log(req.body.phash2);
  console.log(req.body.psign);
  console.log(typeof(req.body.account));
  myContract.methods.doVoting(req.body.ppid2,req.body.phash2,req.body.psign).send({from:req.body.account,gas:1500000,gasPrice:'30000000'})
  .then(console.log);
});

router.post('/cancel',(req,res)=>{
  console.log(req.body.pppid3);
  console.log(req.body.)
  mycontract.methods.giveupProsal(req.body.pppid).send({from:req.body.account,gas:1500000,gasPrice:'30000000'})
  .then(console.log);
});


module.exports = router;
