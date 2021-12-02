var Web3=require('web3');
const { get } = require('../routes/basic_table');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x078d51D7DE304A23c5FE169442B6486251b677F5');
// console.log(abi)
//创建提案
async function createProposal(_pName,_pCtx,_limitTime){
    var account =await web3.eth.getAccounts();
    console.log(account)
    myContract.methods.createProposal(_pName,_pCtx,_limitTime).send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    .then((result)=>{
       console.log(result)
    })
}
//进行附议
async function doVoting(_pId,_PHash,_sigs){
    myContract.methods.doVoting(_pId,_PHash,_sigs).send({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//得到案例pid
async function getPID(){
    myContract.methods.getPID().call()
    .then(console.log);
}

//查询是否附议
async function queryVoting(_pId,address){
    myContract.methods.queryVoting(_pId,address).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//获取区块链时间
  async function getBlockTime(){
    myContract.methods.getBlockTime().call()
    .then(console.log);
    // myContract.methods.getBlockTime().send({from:"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8",gas:1500000,gasPrice:'30000000'})
    // .then(console.log)
}
//获取提案名称
async function getProposalName(_pId){
    myContract.methods.getProposalName(_pId).call({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//获取提案内容
async function getProposalCtx(_pId){
    myContract.methods.getProposalCtx(_pId).send({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
//查询提案同意数量
async function getProposalVCnt(_pId){
    myContract.methods.getProposalVCnt(_pId).send({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getProposalLimit(_pId){
    myContract.methods.getProposalVCnt_pId().send({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
async function getTxHash(_pId,_pName,_pCtx){
    myContract.methods.getTxHash(_pId,_pName,_pCtx).send({from:"0x476c2a2e523b1746fE994478D5Fe57e790542349",gas:1500000,gasPrice:'30000000'})
    .then(console.log)
}
// async function _checkSigs(_pId,_sigs,_txHash){
//   myContract.methods._checkSigs()
// }
// async function giveupProsal(_pId){
//     myContract.methods.giveupProsal(_pId)
// }
createProposal("lin","hello",30000000000);
// getProposeEvt();
getBlockTime();
getPID();

// module.exports={
//     createProposal,
//     doVoting,
//     queryVoting,
//     getBlockTime,
//     getProposalName,
//     getProposalCtx,
//     getProposalVCnt,
//     getProposalLimit,
//     getTxHash

// }