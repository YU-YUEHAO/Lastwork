var express = require('express');
var router = express.Router();
var 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('responsive_table');
});

module.exports = router;
