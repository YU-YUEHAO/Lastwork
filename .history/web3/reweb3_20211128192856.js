var web3=require("web3");
// let web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider("http://localhost:8545"));
const web3 = new Web3(Web3.givenProvider); 
var abi=require("./abi/firstabi.json")
console.log(web3)
let yu=[];
 var accouts=web3.eth.getAccounts().then(function(accounts){
       yu=accounts;
      console.log(yu[0])
 });
var myContract = new web3.eth.Contract(abi,'0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');
// async function createProposal(){
//      var _pName;
//      var _pCtx;
//      var _limitTime;
// }