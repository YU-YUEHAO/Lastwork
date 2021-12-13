var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('http://localhost:3000/inquire');
});

module.exports = router;
