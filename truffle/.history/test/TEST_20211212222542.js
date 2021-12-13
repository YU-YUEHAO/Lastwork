const EthVoting_ygh=artifacts.require("EthVoting_ygh");
const

contract('EthVoting_ygh',async accout =>{
    it("检查creatProposal方法", async()=>{
        let instanc =await EthVoting_ygh.deployed();
        let greet_=await instanc.createProposal("yu","hua",21212112);
         assert.equal(greet_,'Hello','内容不一致');
    });
})