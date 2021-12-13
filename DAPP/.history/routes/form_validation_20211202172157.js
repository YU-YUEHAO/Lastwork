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
    console.log(req.body.ppid);
    console.log(req.body.ppname);
    console.log(req.body.ppctx);
   contract.getTxHash(req.body.ppid,req.body.ppname,req.body.ppctx).then((result)=>{
     console.log(result);
     res.json(result);
   });
})
router.post('/dovoting',(req,res))


module.exports = router;
