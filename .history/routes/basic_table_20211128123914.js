var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('basic_table');
});
router.post("/sureProposal",(req,res)=>{
    
})

module.exports = router;
