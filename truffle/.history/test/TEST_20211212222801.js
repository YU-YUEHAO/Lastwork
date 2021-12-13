const EthVoting_ygh=artifacts.require("EthVoting_ygh");
const testProposal={
    pName:'yu',
    pCtx:'hh',
    chairperson
}
const accout=0x6EE5EBdA1D56E4aE8c45F073c3F7318CE0F6Ced8;

contract('EthVoting_ygh',async accout =>{
    it("检查creatProposal方法", async()=>{
        let instanc =await EthVoting_ygh.deployed();
        let greet_=await instanc.createProposal("yu","hua",21212112);
         assert.equal(greet_,'Hello','内容不一致');
    });
})