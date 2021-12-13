var express = require('express');
var router = express.Router();
var contract =require('../web3/reweb3');
/* GET users listing. */
router.get('/', function(req, res, next) {
//    contract.getProposalName()
  res.render('responsive_table');
});


module.exports = router;
