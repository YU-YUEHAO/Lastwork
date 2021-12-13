var express = require('express');
// const { default: Web3 } = require('web3')
var router = express.Router();
var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x9ac74fFE87160738ab97c511553f344a8CA9157C');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(web3)
  res.render('index2');
});
router.post('/',(req,res)=>{
  console.log(req.body.accout);
   myContract.methos.getbalance().call({from:req.body.accout}).then((result)=>{
     console.
       res.json(result)
   })
})

module.exports = router;
