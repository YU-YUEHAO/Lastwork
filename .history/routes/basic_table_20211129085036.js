var express = require('express');
var router = express.Router();
var contract =require('')


/* GET users listing. */
router.get('/', function(req, res, next) {
//   let web3 = new Web3(Web3.givenProvider);
   res.render('basic_table');
   console.log(web3);
});
router.post('/',(req,res)=>{

})
router.post("/sure",(req,res)=>{
    console.log(req.body);
    
    res.redirect('http://localhost:3000/basic_table')
})

module.exports = router;