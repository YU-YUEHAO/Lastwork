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
})

module.exports = router;
