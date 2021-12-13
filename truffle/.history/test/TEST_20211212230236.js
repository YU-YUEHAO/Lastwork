const EthVoting_ygh=artifacts.require("EthVoting_ygh");
// const Web3=require("../web3/web3.min.js");
// const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
contract('EthVoting',async accout =>{
    
    let instanc =await EthVoting_ygh.deployed();
    const result =await instanc.createProposal("yu","yuu",232323);
    let tx=result.timestamp;
    let blockNumber=web3.eth.getTransaction(tx).blockNumber;
    let pid=web3.eth.getBlock(blockNumber).timestamp
    let pid=result.tim
    it("检查getProposalName", async()=>{
        console.log(pid);
        let greet_=await instanc.getProposalName(1639320732);
         assert.equal(greet_,'yu','内容不一致');
    });

    // it("检查queryVoting", async()=>{
    //     let greet_=await instanc.queryVoting(pid,"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8");
    //      assert.equal(greet_,'yu','内容不一致');
    // });
    
})