var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');


/* GET users listing. */
router.get('/', function(req, res, next) {
//   let web3 = new Web3(Web3.givenProvider);
   res.render('basic_table');
   console.log(web3);
});
router.post('/',(req,res)=>{

})
router.post("/sure",(req,res)=>{
    console.log(req.body);
    console.log(req.body.)
    contract.createProposal(req.body._pName,req.body._pCtx,Number(req.body._limitTime));
    res.redirect('http://localhost:3000/index2')
})

module.exports = router;
