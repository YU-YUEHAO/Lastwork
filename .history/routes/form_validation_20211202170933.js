const { query } = require('express');
var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form_validation');
});
router.post('/gethash',(res,req)=>{
  console.log(req.body);
    console.log(req.body._limitTime);
    console.log(req.body.pName);
    console.log(req.body._pCtx);
   contract.getTxHash()
})


module.exports = router;
