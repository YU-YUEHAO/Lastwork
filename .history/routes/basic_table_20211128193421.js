var express = require('express');
var router = express.Router();
var web3=require("web3");

var abi=require("../web3/abi/firstabi.json");
var myContract = new web3.eth.Contract(abi,'0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('basic_table');
  console.log(web3);
});
router.post("/sureProposal",(req,res)=>{
    let web3 = new Web3(Web3.givenProvider); 
    console.log(_pName,_pCtx,_limitTime);
   myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:yu[0],gas:1500000,gasPrice:'30000000'})
    .on('error',function(error){
        console.log(error)
    })
    res.redirect('basic_table')
})

module.exports = router;
