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

  function getmessage(){ 
    var ppid = $('#ppid').val();
   //  var ppid=1638519076;
    console.log(ppid);
   $.ajax({
       method:"post",
       url:"http://localhost:3000/responsive_table/select",
       data:{ppid:ppid,account:account},
           success:function(result){
               console.log(result);
               console.log($("tbody"));
         
                   let innerHTML = [];
                   for(let i of result){
                       if(i.que==0 ||i.que==null){
                              i.que='本人未附议'
                       }else{
                           i.que=i.que+""
                       }
                       inner = `
                       <tr>
                       <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                       <td>${i.ProposalName}</td>
                       <td>${i.ProposalCtx}</td>
                       <td>${i.ProposalVCnt}</td>
                       <td>${i.que}</td>
                       <td>${i.ProposalLimit}</td>
                       <td>
                       <a href="" class="active" ui-toggle-class=""><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                       </td>
                   </tr>
                       `
                       innerHTML.push(inner);
                   }
                   for(let i in $("tbody")){
                       if($("tbody")[i] == undefined){
                       break;
                       }
                       if (innerHTML[i] != undefined){
                       $("tbody")[i].innerHTML = innerHTML[i]
                       }else{
                       $("tbody")[i].innerHTML = "";
                   }
                   }
           },
           error: function(data){
            console.log(data)
          
      }
    })
}