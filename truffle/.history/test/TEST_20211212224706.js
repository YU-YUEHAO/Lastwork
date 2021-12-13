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

    it("should be able to create a new zombie", async () => {
        const contractInstance = await CryptoZombies.new();
        // start here
        const result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.name,zombieNames[0]);

    })
    
})