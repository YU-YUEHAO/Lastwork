var express = require('express');
var router = express.Router();
// var contract =require('../web3/reweb3');
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
var abi2=require("../web3/abi/secondabi.json")
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x0f63cB06905A9C630D74581a32cc83e2D52F58eB');
var tokeContract = new web3.eth.Contract(abi2,'0x7de5692663C55312FAfaCfbb375d750627b45dFD');
/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('form_validation');
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
    });
})
router.post('/dovoting',(req,res)=>{
  console.log(req.body.ppid2);
  console.log(req.body.phash2);
  console.log(req.body.psign);
  console.log(typeof(req.body.account));
  myContract.methods.doVoting(req.body.ppid2,req.body.phash2,req.body.psign).send({from:req.body.account,gas:1500000,gasPrice:'30000000'})
  .then(console.log).then(
    tokeContract.methods.approve("0x0f63cB06905A9C630D74581a32cc83e2D52F58eB",10).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
   ).then(
    myContract.methods.approve(req.body.account).call({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8"})
    .then(console.log)
  ).then(
    myContract.methods.
    transferFrom(req.body.account).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8"})
    .then(console.log)
  ).catch((error)=>console.log(error));;

});

router.post('/cancel',(req,res)=>{
  console.log(req.body.pppid3);
  console.log(req.body.account);
  myContract.methods.giveupProsal(req.body.pppid).send({from:req.body.account,gas:1500000,gasPrice:'30000000'})
  .then(console.log)
  .catch((error)=>console.log(error));;
});


module.exports = router;
