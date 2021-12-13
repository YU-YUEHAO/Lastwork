const mycontract=artifacts.require("EthVoting_ygh");

contract('Hello',async accout =>{
    it("检查合约内容", async()=>{
        let instanc =await Hello.deployed();
        let greet_=await instanc.greet();
         assert.equal(greet_,'Hello','内容不一致');
    });
})