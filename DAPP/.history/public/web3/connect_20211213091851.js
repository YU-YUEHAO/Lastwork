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

function getsign(){
    var phash=$("#cname").val();
    console.log(phash);
    console.log(account);
    ethereum.request({ method: "personal_sign", params: [account,phash]}).then((result)=>{
         console.log(result);
         document.getElementById("sign").innerHTML=result;
    });
}

function gethash(){
  var pname1=$("#ppname").val();
  var pid1=$("#ppid").val();
  var pctx1=$("#ppctx").val();
  console.log(pname1);
  console.log(pid1);
  console.log(pctx1);
  $.ajax({
 method:"post",
 url:"http://localhost:3000/form_validation/gethash",
 data:{pname1:pname1,pid1:pid1,pctx1:pctx1,account:account},
 success:function(data){
     console.log(data);
     document.getElementById("hash").innerHTML=data;
     console.log("完成");

  //    window.location.href="http://localhost:3000/basic_table";
 },
 error: function(data){
     console.log(data)
 }
}) 
}
function dovoting(){
 var phash2=$("#phash2").val();
  var ppid2=$("#pid2").val();
  var psign=$("#psign").val();
  $.ajax({
 method:"post",
 url:"http://localhost:3000/form_validation/dovoting",
 data:{phash2:phash2,ppid2:ppid2,psign:psign,account:account},
 success:function(data){
     console.log("完成")
     alert("完成投票请查看");

  //    window.location.href="http://localhost:3000/basic_table";
 },
 error: function(data){
     console.log(data)
 }
}) 
}

function cancel(){
  var pppid3=$("#pppid3").val();
  console.log(pppid3);
  $.ajax({
 method:"post",
 url:"http://localhost:3000/form_validation/cancel",
 data:{pppid3:pppid3,account:account},
 success:function(data){
     console.log(data)
     console.log("完成")
     alert("取消成功");

  //    window.location.href="http://localhost:3000/basic_table";
 },
 error: function(data){
     console.log(data)
 }
}) 
}

