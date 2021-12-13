if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!')
    getAccount();
    ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        console.log("现在的账户是:", accounts[0]);
        $("#accountAddress").html(accounts[0]);
    });
    
      $.ajax({  
        type: 'POST',
        url: 'http://localhost:3000/form_validation/',
        data: { acc: Account[0]},
        dataType: 'json',
        success: function (data) {
          if(data.alert == "name"){
            console.log(1)
            $('#exampleModal').modal('show')
          }
          $('#accountBalance').html(parseInt(data.token / Math.pow(10, 18)) + 'LINX')
          
        },
        error: function (data) {
          console.log(data)
        },
      })
    // })

    
} else {
  alert('plase install the MetaMask')
}

async function getAccount() {
    yghaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
   const account = yghaccounts[0];
   $("#accountAddress").html(account);
   console.log(account)
}


// function getBalance(acc) {
//   Account = acc
//   return ethereum.request({ method: 'eth_getBalance', params: [acc, 'latest'] })
// }

// ethereum.on('accountsChanged', function (accounts) {
//   $.ajax({  
//     type: 'POST',
//     url: 'http://localhost:3000/form_validation',
//     data: { acc: accounts[0]},
//     dataType: 'json',
//     success: function (data) {
//       $('#accountAddress').html(accounts[0])
//       $option = `<option>${accounts[0]}</option>`
//       $('#bidAccount').append($option)
//       $('#accountBalance').html(parseInt(data.token / Math.pow(10, 18)) + 'LINX')
//     },
//     error: function (data) {
//       console.log(data)
//     },
//   })
// })