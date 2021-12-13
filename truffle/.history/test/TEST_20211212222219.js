const EthVoting_ygh=artifacts.require("EthVoting_ygh");

contract('EthVoting_ygh',async accout =>{
    it("检查creatPro内容", async()=>{
        let instanc =await EthVoting_ygh.deployed();
        let greet_=await instanc.greet();
         assert.equal(greet_,'Hello','内容不一致');
    });
})