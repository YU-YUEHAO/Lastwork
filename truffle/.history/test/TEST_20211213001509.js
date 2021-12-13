const { default: Web3 } = require("web3");

const EthVoting_ygh=artifacts.require("EthVoting_ygh");

contract('EthVoting',async accout =>{
 
    it("检查getProposalName", async()=>{
        let instanc =await EthVoting_ygh.deployed();
      const result =await instanc.createProposal("yu","yuu",232323);
      //   console.log(result);
      console.log(result.logs[0].args._proposalId.toNumber());
      let pid=result.logs[0].args._proposalId.toNumber()
    //     console.log(pid);
        let greet_=await instanc.getProposalName(pid);
         assert.equal(greet_,'yu','内容不一致');
    });

    it("检查getProposalCtx", async()=>{
   let instanc =await EthVoting_ygh.deployed();
      const result =await instanc.createProposal("yu","yuu",232323);
      //   console.log(result);
      console.log(result.logs[0].args._proposalId.toNumber());
      let pid=result.logs[0].args._proposalId.toNumber()
    //     console.log(pid);
        let greet_=await instanc.getProposalCtx(pid);
         assert.equal(greet_,'yuu','内容不一致');
    });

    it("检查getProposalVCnt",async)
    
})