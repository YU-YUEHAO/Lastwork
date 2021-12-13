var express = require('express');
var router = express.Router();
var web3 = require('web3');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(web3)
  console.log(web2)
  res.render('index');
});

module.exports = router;
