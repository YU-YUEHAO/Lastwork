var express = require('express');
var router = express.Router();
var Web3 = require('web3');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;