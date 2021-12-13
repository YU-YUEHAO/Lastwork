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
      var time = contract.getProposeEvt();
      res.json(time);
})
router.post("/sure",(req,res)=>{
    console.log(req.body);
    console.log(req.body._limitTime);
    console.log(req.body._pName);
    console.log(req.body._pCtx);
    // console.log(contract.createProposal());
   contract.createProposal(req.body._pName,req.body._pCtx,req.body._limitTime).then((result)=>{
     console.log(result);
   })
   contract.getPID().then((pid)=>{
       res.json(pid);
       console.log(pid);
   });
  
    // contract.createProposal("yuy","yuyu",3000000);
})

module.exports = router;
