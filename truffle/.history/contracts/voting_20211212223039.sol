// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ECDSA.sol";
//import "./safemath.sol";
import "./ERC20.sol";
contract EthVoting_ygh {
     using ECDSA for bytes32;
    // using SafeMath for uint;

    //注册
    struct RegistUser_ygh{
        string usename;
        address userAddress;
        uint registtime;
    }

    //附议人信息 
    struct Voter_ygh {
        uint voteTimeStamp; //投票时的区块时间
        bool initialized;   //判断是否投过票的标志
    }
   
    //提案内容
    struct Proposal_ygh {
        string pName;        //提案标题
    	string pCtx;         //提案内容
    	address chairperson; //提案主持人
        uint voteCount;      //附议人数
        bool initialized;    //判断提案是否存在的标志
        uint limitTime;      //附议限制时间
    	mapping(address => Voter_ygh) voters; //附议列表
    }
   
    
    //所有提案列表
    mapping(uint => Proposal_ygh) public proposals_ygh;
    
    //附议事件
    event VoteEvt_ygh(string indexed eventType, address _voter, uint timestamp);
    
    //提案事件
    event ProposeEvt_ygh(string indexed eventType, uint _proposalId, uint _limitTime,bytes32 PHash) ;
    
    //创建新提案
   uint pp;
    function createProposal(string memory _pName, string memory _pCtx, uint _limitTime) public returns (uint){
      //新提案
     uint pId = block.timestamp;
      pp=pId;
      pId=pId;
      Proposal_ygh storage p = proposals_ygh[pId];
      p.pName=_pName;
      p.pCtx=_pCtx;
      p.chairperson=msg.sender;
      p.initialized=true;
      p.limitTime= _limitTime;
      p.voteCount=0;
      bytes32 PHash=getTxHash(pId,_pName,_pCtx);
      emit ProposeEvt_ygh("propose", pId, _limitTime,PHash);
      return pId;
    }
    //获取实例pid
    function getPID() public view returns(uint){
     return pp;
   }
    
    //进行附议
    function doVoting(uint _pId,bytes32 _PHash,bytes memory _sigs) public {
        //验证签名
      require(_checkSigs(_sigs, _PHash), "invalid sig");
      //提案是否存在
      if (proposals_ygh[_pId].initialized == false)
        revert("proposal not exist");
        
      uint currentTime = block.timestamp;
      
      //是否已超过提案时限
      if (proposals_ygh[_pId].limitTime < currentTime)
        revert("exceed voting time");
      
      //是否已经投过票
      if (proposals_ygh[_pId].voters[msg.sender].initialized == true)
       revert("already vote");
      
      //新投票信息
      Voter_ygh memory voter = Voter_ygh({
         voteTimeStamp: block.timestamp,
         initialized: true
      });
    
      //记录投票信息
      proposals_ygh[_pId].voters[msg.sender] = voter;
      proposals_ygh[_pId].voteCount+=1;
      
      emit VoteEvt_ygh("vote", msg.sender, block.timestamp);
    }	
    
    //查询是否附议
    function queryVoting(uint _pId, address voterAddr) public view returns (uint){
      //提案是否存在
      if (proposals_ygh[_pId].initialized == false)
        revert("proposal not exist");
      //返回投票时间
      return proposals_ygh[_pId].voters[voterAddr].voteTimeStamp;
    }	
    
    //获取区块链时间
    function getBlockTime() public view returns (uint) { 
     return block.timestamp;
    }

    //查询提案标题
    function getProposalName(uint _pId) public view returns (string memory s) { 
     s = proposals_ygh[_pId].pName;
    } 	
    
    //查询提案内容
    function getProposalCtx(uint _pId) public view returns (string memory s) { 
     s = proposals_ygh[_pId].pCtx;
    }
    
    //查询提案同意数量
    function getProposalVCnt(uint _pId) public view returns (uint v) { 
     v = proposals_ygh[_pId].voteCount;
    }
    
    //查询提案期限
    function getProposalLimit(uint _pId) public view returns (uint t) { 
     t = proposals_ygh[_pId].limitTime;
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
    function _checkSigs(bytes memory _sigs, bytes32 _txHash)
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
        require(proposals_ygh[_pId].chairperson == msg.sender);
        address a=0x0000000000000000000000000000000000000000;
         proposals_ygh[_pId].pName="null";
         proposals_ygh[_pId].pCtx="null";
         proposals_ygh[_pId].chairperson=a;
         proposals_ygh[_pId].voteCount=0;
         proposals_ygh[_pId].initialized=false;
         proposals_ygh[_pId].limitTime=0;
    }

    //erc20
    address admin_ygh=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address token_ygh=0xd9145CCE52D386f254917e481eB44e9943F39138;

    function getbalance() public view returns(uint){
      return (ERC20(token_ygh).balanceOf(msg.sender));
    }

    function approve(address _address)public returns(bool){
        ERC20(token_ygh).approve(_address,10);
        return true;
    }
    
    function transferFrom(address _useadress)public {
        ERC20(token_ygh).transferFrom(admin_ygh,_useadress,10);
        }  
}
