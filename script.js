
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




/*function updatePrices() {
    $.ajax({
        url: "https://api.coingecko.com/api/v3/simple/price?&ids=bitcoin%2Cethereum%2Cworldcoin%2Cdogecoin&vs_currencies=usd", // Replace 'liveprice' with the actual URL string if it's not a variable
        method: 'GET', // Assuming you're using a GET request
        success: function(response) {
            // Update the DOM elements with the latest prices
            btc.innerHTML = response.bitcoin.usd;
            eth.innerHTML = response.ethereum.usd;
            wld.innerHTML = response.worldcoin.usd;
            doge.innerHTML = response.dogecoin.usd;
            
            // Log the response for debugging
            console.log(response);
        },
        error: function(error) {
            console.error('Error fetching live prices:', error);
        }
    });
}

// Call the function immediately to get the prices on page load
updatePrices();

// Set interval to update prices every 5 seconds (5000 milliseconds)
setInterval(updatePrices, 5000);
*/