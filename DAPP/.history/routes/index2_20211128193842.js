var express = require('express');
// const { default: Web3 } = require('web3')
var router = express.Router();
var web3 =require('../web3/reweb3')


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
