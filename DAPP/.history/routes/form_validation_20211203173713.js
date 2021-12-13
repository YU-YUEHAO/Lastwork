const { query } = require('express');
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
});
router.post('/gethash',(res,req)=>{
  console.log(req.body);
    console.log(req.body.ppid);
    console.log(req.body.ppname);
    console.log(req.body.ppctx);
   contract.getTxHash(req.body.ppid,req.body.ppname,req.body.ppctx).then((result)=>{
     console.log(result);
     res.json(result);
   });
})
router.post('/dovoting',(req,res)=>{
  console.log(req.body.ppid2);
  console.log(req.body.phash2);
  console.log(req.body.psign);
  contract.doVoting(req.body.ppid2,req.body.phash2,req.body.psign);
})


module.exports = router;
