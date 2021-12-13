var express = require('express');
var router = express.Router();
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x0f63cB06905A9C630D74581a32cc83e2D52F58eB');

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('basic_table');
});
router.post('/getime',(req,res)=>{
  console.log(req.body.account);
      console.log(2);
      myContract.methods.getBlockTime().call().then((result)=>{
        res.json(result);
        console.log(result);
      });
})
router.post("/sure",(req,res)=>{
  console.log(req.body.account);
    console.log(req.body);
    console.log(req.body._limitTime);
    console.log(req.body._pName);
    console.log(req.body._pCtx);
    myContract.methods.createProposal(req.body._pName,req.body._pCtx,req.body._limitTime).send({from:req.body.account,gas:1500000,gasPrice:'30000000'}).catch((error)=>console.log(error));
    myContract.methods.getPID().call({from:req.body.account})
    .then((pid)=>{
        console.log(pid);
        res.json(pid);
    }).catch((error)=>console.log(error));;
})

module.exports = router;
