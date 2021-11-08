var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var Web3=new require(web3.givenProvider); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  console.log(web3);

});

module.exports = router;
