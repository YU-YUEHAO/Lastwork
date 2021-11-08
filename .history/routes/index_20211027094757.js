var express = require('express');
var router = express.Router();
// var Web3 = require('web3');
// var Web3=new Web3(web3.givenProvider); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
   web3 = new Web3( new web3(web3.givenProvider) || new Web3.providers.HttpProvider("http://localhost:8545"));
  }
});

module.exports = router;
