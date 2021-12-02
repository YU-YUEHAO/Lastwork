// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.3/contracts/cryptography/ECDSA.sol";
contract EthVoting {
     using ECDSA for bytes32;
    //注册
    struct RegistUser{
        string usename;
        address userAddress;
        uint registtime;
    }
    RegistUser[] public registuser;
    mapping (uint => address)  RegistUserList;
    mapping (address => uint) RegistCount;
    event Regis(string usename,address userAddress,uint registtime,uint userID);


    //附议人信息
    struct Voter {
        uint voteTimeStamp; //投票时的区块时间
        bool initialized;   //判断是否投过票的标志
    }
    
   
    //提案内容
    struct Proposal {
        string pName;        //提案标题
    	string pCtx;         //提案内容
    	address chairperson; //提案主持人
        uint voteCount;      //附议人数
        bool initialized;    //判断提案是否存在的标志
        uint limitTime;      //附议限制时间
    	mapping(address => Voter) voters; //附议列表
    }
    uint numRequests;
    
    //所有提案列表
    mapping(uint => Proposal) public proposals;
    
    //附议事件
    event VoteEvt(string indexed eventType, address _voter, uint timestamp);
    
    //提案事件
    event ProposeEvt (string indexed eventType, uint _proposalId, uint _limitTime,bytes32 PHash) ;
    
    //创建新提案
     uint pId = block.timestamp; 
    function createProposal(string memory _pName, string memory _pCtx, uint _limitTime) public returns (uint){
      //新提案
      Proposal storage p = proposals[pId];
      p.pName=_pName;
      p.pCtx=_pCtx;
      p.chairperson=msg.sender;
      p.initialized=true;
      p.limitTime= _limitTime;
      p.voteCount=0;
      bytes32 PHash=getTxHash(pId,_pName,_pCtx);
      emit ProposeEvt("propose", pId, _limitTime,PHash);
      return pId;
    }
    //获取实例pid
    function getProposeEvt() external view returns(uint _pId){
        return pId;
    }
    
    //进行附议
    function doVoting(uint _pId,bytes32 _PHash,bytes memory _sigs) public {
        //验证签名
      require(_checkSigs(_pId, _sigs, _PHash), "invalid sig");
      //提案是否存在
      if (proposals[_pId].initialized == false)
        revert("proposal not exist");
        
      uint currentTime = block.timestamp;
      
      //是否已超过提案时限
      if (proposals[pId].limitTime < currentTime)
        revert("exceed voting time");
      
      //是否已经投过票
      if (proposals[pId].voters[msg.sender].initialized == true)
       revert("already vote");
      
      //新投票信息
      Voter memory voter = Voter({
         voteTimeStamp: block.timestamp,
         initialized: true
      });
    
      //记录投票信息
      proposals[pId].voters[msg.sender] = voter;
      proposals[pId].voteCount+=1;
      
      emit VoteEvt("vote", msg.sender, block.timestamp);
    }	
    
    //查询是否附议
    function queryVoting(uint _pId, address voterAddr) public view returns (uint){
      //提案是否存在
      if (proposals[_pId].initialized == false)
        revert("proposal not exist");
      
      //返回投票时间
      return proposals[pId].voters[voterAddr].voteTimeStamp;
    }	
    
    //获取区块链时间
    function getBlockTime() public view returns (uint t) { 
     t = block.timestamp;
     
        }
    
    //查询提案标题
    function getProposalName(uint _pId) public view returns (string memory s) { 
     s = proposals[_pId].pName;
    } 	
    
    //查询提案内容
    function getProposalCtx(uint _pId) public view returns (string memory s) { 
     s = proposals[_pId].pCtx;
    }
    
    //查询提案同意数量
    function getProposalVCnt(uint _pId) public view returns (uint v) { 
     v = proposals[_pId].voteCount;
    }
    
    //查询提案期限
    function getProposalLimit(uint _pId) public view returns (uint t) { 
     t = proposals[_pId].limitTime;
    }
    //注册用户
     function toRegist(string memory _name,address _userAddress) public {
           _userAddress=msg.sender;
           uint _Registtime=block.timestamp;
           registuser.push(RegistUser(_name,_userAddress,_Registtime)) ;
           uint _id=registuser.length - 1;
           RegistUserList[_id]=_userAddress;
           RegistCount[_userAddress]++;
          emit Regis(_name,_userAddress,_Registtime,_id);
     }
     //获取案例哈希
     function getTxHash(
        uint  _pId,
        string memory _pName,
        string memory _pCtx
    ) public view returns (bytes32) {
        return keccak256(abi.encodePacked(address(this), _pId, _pName, _pCtx));
    }

   //检查签名
    function _checkSigs(uint _pId,bytes memory _sigs, bytes32 _txHash)
        private
        view
        returns (bool)
    {
        bytes32 ethSignedHash = _txHash.toEthSignedMessageHash();
        for (uint i = 0; i < _sigs.length; i++) {
            address signer = ethSignedHash.recover(_sigs);
            bool valid = signer == msg.sender;
            if (!valid) {
                return false;
            }
        }
        return true;
    }
    
     //提议人取消提案
    function giveupProsal(uint _pId) external {
        require(proposals[_pId].chairperson == msg.sender);
        address a=0x0000000000000000000000000000000000000000;
         proposals[_pId].pName="null";
         proposals[_pId].pCtx="null";
         proposals[_pId].chairperson=a;
         proposals[_pId].voteCount=0;
         proposals[_pId].initialized=false;
         proposals[_pId].limitTime=0;
    }
}
