const EthVoting_ygh=artifacts.require("EthVoting_ygh");

contract('EthVoting_ygh',async accout =>{
    let instanc =await EthVoting_ygh.deployed();
   const result =await instanc.createProposal("yu","yuu",232323);
//    let tx=result.tx;
   let pid=result.timestamp;
    it("检查getProposalName", async()=>{
        let greet_=await instanc.getProposalName(pid);
         assert.equal(greet_,'yu','内容不一致');
    });
    
})