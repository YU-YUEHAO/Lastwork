const { query } = require('express');
var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form_validation');
});
router.post('/gethash',(res,req)=>{
   contract.gethash()
})


module.exports = router;