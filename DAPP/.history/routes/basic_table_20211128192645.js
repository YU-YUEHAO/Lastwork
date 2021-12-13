var express = require('express');
const { request } = require('../app');
var router = express.Router();
var Contract=require("../web3/reweb3")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('basic_table');
});
router.post("/sureProposal",(req,res)=>{
    console.log(_pName,_pCtx,_limitTime);
    Contract.myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:yu[0],gas:1500000,gasPrice:'30000000'})
    .on('error',function(error){
        console.log(error)
    })
    res.redirect('basic_table')
})

module.exports = router;
