var Web3=require("web3");
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(Web3.givenProvider);
async function createProposal(){
    var myContract = new web3.eth.Contract(abi,'0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');
   myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:yu[0],gas:1500000,gasPrice:'30000000'})
    .then(console).on('error',function(error){
        console.log(error)
    })
}