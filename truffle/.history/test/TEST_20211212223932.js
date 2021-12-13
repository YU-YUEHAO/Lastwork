const EthVoting_ygh=artifacts.require("EthVoting_ygh");
const testProposal={
    pName:'yu',
    pCtx:'hh',
    chairperson:'0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8',
    voteCount:'1',
    initialized:'true',
    limitTime:1000000,
}
const accout=0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8;

contract('EthVoting_ygh',async accout =>{
    let instanc =await EthVoting_ygh.deployed();
   const result =await instanc.createProposal("yu","")
    // it("检查getProposalName", async()=>{
    //     let greet_=await instanc.getProposalName();
    //      assert.equal(greet_,'Hello','内容不一致');
    // });
    
})