var express = require('express');
var router = express.Router();
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x9ac74fFE87160738ab97c511553f344a8CA9157C');

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
      })
})
router.post("/sure",(req,res)=>{
  console.log(req.body.account);
    console.log(req.body);
    console.log(req.body._limitTime);
    console.log(req.body._pName);
    console.log(req.body._pCtx);
    // console.log(contract.createProposal());
    myContract.methods.createProposal(req.body._pName,req.body._pCtx,req.body._limitTime).send({from:req.body.account,gas:1500000,gasPrice:'30000000'})
    myContract.methods.getPID().call({from:req.body.account})
    .then((pid)=>{
        console.log(pid);
        res.json(pid);
    }).on('error',(error)=>{
      console.log(error);
   });
})

module.exports = router;
