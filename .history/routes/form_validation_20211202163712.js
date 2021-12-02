var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('form_validation');
});


module.exports = router;
