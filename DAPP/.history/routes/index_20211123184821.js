var express = require('express');
var router = express.Router();
// var Web3 = require('web3');
// var Web3=new Web3(web3.givenProvider); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',web3);
});

module.exports = router;
