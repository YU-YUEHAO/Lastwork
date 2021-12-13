var express = require('express');
var router = express.Router();
// var contract =require('../web3/reweb3');
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x078d51D7DE304A23c5FE169442B6486251b677F5');


/* GET users listing. */
router.get('/', function(req, res, next) {
//   let web3 = new Web3(Web3.givenProvider);
   res.render('basic_table');
   console.log(web3);
});
router.post('/getime',(req,res)=>{
      console.log(2);
      // var time = contract.getBlockTime();
      myContract.methods.getBlockTime().call().then((result)=>{
        res.json(result);
        console.log(result);
      })
      
})
router.post("/sure",(req,res)=>{
    console.log(req.body);
    console.log(req.body._limitTime);
    console.log(req.body._pName);
    console.log(req.body._pCtx);
    // console.log(contract.createProposal());
    console.log(100)
   var ln = contract.CreateProposal(req.body._pName,req.body._pCtx,req.body._limitTime);
   ln.then(console.log)
   var pid= contract.getPID();
     res.json(pid);
    // contract.createProposal("yuy","yuyu",3000000);
})

module.exports = router;
