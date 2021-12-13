var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');


/* GET users listing. */
router.get('/', function(req, res, next) {
//   let web3 = new Web3(Web3.givenProvider);
   res.render('basic_table');
   console.log(web3);
});
router.post('/getime',(req,res)=>{
      console.log(2);
      var time = contract.getBlockTime();
      res.json(time);
      
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