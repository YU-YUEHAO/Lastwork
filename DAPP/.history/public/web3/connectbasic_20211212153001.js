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


  function sureProal(){
    var _pName = $('#vote_name').val();
    var _pCtx = $('#vote_content').val();
    var _limitTime = $('#vote_limittime').val();
    console.log(_pName)
    $.ajax({
      method:"post",
      url:"http://localhost:3000/basic_table/sure",
      data:{_pName:_pName,_pCtx:_pCtx,_limitTime:_limitTime,account:account},
      success:function(data){
          console.log(data);
       //    console.log("提交成共")
          alert("提交成功，pid为"+data);
       //    window.location.href="http://localhost:3000/basic_table";
      },
      error: function(data){
          console.log(data);
      }
    })   
   }
   function gettime(){
       $.ajax({
           method:"post",
           url:"http://localhost:3000/basic_table/getime",
           data:{},
           success:function(data){
              console.log(data);
           //    document.getElementById("voteblocktime").innerHTML=data;
              alert("nowblocktime is "+data)
           },
           error: function(data){
           console.log(data);
           alert(data);
      }
    })
   }
