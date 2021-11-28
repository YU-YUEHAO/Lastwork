var web3=require("web3");
let web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider("http://localhost:8545"));
var abi=require("./abi/firstabi.json")
var myContract = new web3.eth.Contract(abi, '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');
async function createProposal(){
     var _pName;
     var _pCtx;
     var _limitTime;
}