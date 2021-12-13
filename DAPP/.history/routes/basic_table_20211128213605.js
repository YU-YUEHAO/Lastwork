var express = require('express');
var router = express.Router();
var Web3=require("web3");
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(Web3.givenProvider);

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
//     var myContract = new web3.eth.Contract(abi,'0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');
//    myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:yu[0],gas:1500000,gasPrice:'30000000'})
//     .on('error',function(error){
//         console.log(error)
//     })
    // res.redirect('http://localhost:3000/basic_table')
})

module.exports = router;
