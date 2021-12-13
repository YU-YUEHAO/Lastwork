const { default: Web3 } = require("web3");

const EthVoting_ygh=artifacts.require("EthVoting_ygh");

contract('EthVoting',async accout =>{
 
    var instanc =await EthVoting_ygh.deployed();
  const result =await instanc.createProposal("yu","yuu",232323);
  
  //   console.log(result);
  console.log(result.logs[0].args._proposalId.toNumber());
  let pid=result.logs[0].args._proposalId.toNumber()
    it("检查getProposalName", async()=>{
    //     console.log(pid);
        let greet_=await instanc.getProposalName(pid);
         assert.equal(greet_,'yu','内容不一致');
    });

    // it("检查queryVoting", async()=>{
    //     let greet_=await instanc.queryVoting(pid,"0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8");
    //      assert.equal(greet_,'yu','内容不一致');
    // });
    
})