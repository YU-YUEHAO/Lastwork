var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
async function createProposal(_pName,_pCtx,_limitTime){
    var myContract = new web3.eth.Contract(abi,'0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');
    var account =await web3.eth.getAccounts();
    console.log(account)
//    myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
//     .then(console.log)
}
createProposal("lin","hello",30000000000)