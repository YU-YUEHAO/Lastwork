var express = require('express');
// const { default: Web3 } = require('web3')
var router = express.Router();
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
var abi2=require("../web3/abi/secondabi.json")
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x9ac74fFE87160738ab97c511553f344a8CA9157C');
var tokeContract = new web3.eth.Contract(abi2,'0x7de5692663C55312FAfaCfbb375d750627b45dFD');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(web3)
  res.render('index2');
});
// router.post("/sureProposal",(req,res)=>{
//    console.log(_pName,_pCtx,_limitTime);
//   web3.myContract
// })

module.exports = router;
