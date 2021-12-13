if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!')
      getAccount();
      ethereum.on('accountsChanged', function (accounts) {
          // Time to reload your interface with accounts[0]!
          console.log("现在的账户是:", accounts[0]);
          account=accounts[0];
          $("#address").html(accounts[0]);
      });
  } else {
    alert('plase install the MetaMask')
  }
  var account;
  async function getAccount() {
      yghaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
      account = yghaccounts[0];
     $("#address").html(account);
     console.log(account)
  }

var Web3=require('web3');
var abi=require("../web3/abi/firstabi.json");
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9999'));
var myContract = new web3.eth.Contract(abi,'0x9ac74fFE87160738ab97c511553f344a8CA9157C');
 myContract.method.getbalance().call({from:account}).then((result)=>{
    $("#voting")
 })
