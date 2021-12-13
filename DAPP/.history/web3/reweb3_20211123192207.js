var web3=require("web3");
let web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider("http://localhost:8545"));
var abi=require("./abi/firstabi.json")
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}