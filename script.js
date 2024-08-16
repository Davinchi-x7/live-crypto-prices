
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var wld = document.getElementById("worldcoin");
var doge = document.getElementById("dogecoin");



var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?&ids=bitcoin%2Cethereum%2Cworldcoin%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    
      btc.innerHTML = response.bitcoin.usd;
      eth.innerHTML = response.ethereum.usd;
      wld.innerHTML = response.worldcoin.usd;
      doge.innerHTML = response.dogecoin.usd;
      console.log(response);

})




