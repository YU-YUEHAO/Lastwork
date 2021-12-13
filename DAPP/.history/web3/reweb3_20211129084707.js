var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8');
async function createProposal(_pName,_pCtx,_limitTime){
    var account =await web3.eth.getAccounts();
    console.log(account)
   myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getProposeEvt(){
   myContract.methods.getProposeEvt().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
   .then(console.log)
}
async function doVoting(_pId,_PHash,_sigs){
    myContract.methods.doVoting(_pId,_PHash,_sigs).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)

}
async function queryVoting(_pId,address){
    myContract.methods.queryVoting(_pId,address).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getBlockTime(){
    myContract.methods.queryVoting().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getProposalName(){
    myContract.methods.getProposalName().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getProposalCtx(){
    myContract.methods.getProposalCtx().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getProposalVCnt(){
    myContract.methods.getProposalVCnt().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getProposalLimit(){
    myContract.methods.getProposalVCnt().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getTxHash(_pId,_pName,_pCtx){
    myContract.methods.getTxHash(_pId,_pName,_pCtx).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
// async function _checkSigs(_pId,_sigs,_txHash){
//   myContract.methods._checkSigs()
// }
async function giveupProsal(_pId)
createProposal("lin","hello",30000000000)