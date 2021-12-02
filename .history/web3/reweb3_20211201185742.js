var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x9d83e140330758a8fFD07F8Bd73e86ebcA8a5692');
//创建提案
async function createProposal(_pName,_pCtx,_limitTime){
    var account =await web3.eth.getAccounts();
    console.log(account)
   myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//获取实例pid
// async function getProposeEvt(){
//    myContract.methods.getProposeEvt().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
//    .then(console.log)
// }
//确认投票
async function doVoting(_pId,_PHash,_sigs){
    myContract.methods.doVoting(_pId,_PHash,_sigs).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)

}
//查询是否附议
async function queryVoting(_pId,address){
    myContract.methods.queryVoting(_pId,address).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//获取区块链时间
async function getBlockTime(){
     myContract.methods.getBlockTime().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8"}).then(function(result){
         console.log(result);
     })
    // myContract.methods.getBlockTime().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    // .then(console.log)
}
//获取提案名称
async function getProposalName(){
    myContract.methods.getProposalName().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//获取提案内容
async function getProposalCtx(){
    myContract.methods.getProposalCtx().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//查询提案同意数量
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
// async function giveupProsal(_pId){
//     myContract.methods.giveupProsal(_pId)
// }
// createProposal("lin","hello",30000000000);
// getProposeEvt()
getBlockTime()

module.exports={
    createProposal,
    // getProposeEvt,
    doVoting,
    queryVoting,
    getBlockTime,
    getProposalName,
    getProposalCtx,
    getProposalVCnt,
    getProposalLimit,
    getTxHash

}