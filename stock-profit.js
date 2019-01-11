document.getElementById('random').addEventListener('click', randomStocks);
document.getElementById('check').addEventListener('click', checkIfProfit)
let prices = [];
function randomStocks() {
  prices.length = 0;
  let stocks = document.getElementById('stocks');
  stocks.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    prices.push(Math.floor(Math.random() * 60) + 30)
    let stockPrice = document.createElement('div');
    stockPrice.className = 'stockPrice';
    stockPrice.innerHTML = prices[i];
    stocks.appendChild(stockPrice);
  }
}

function checkIfProfit() {
  let stocks = document.getElementById('stocks');
  let hasProfit = document.createElement('div');
  hasProfit.className = 'hasProfit';
  stocks.appendChild(hasProfit);
  let profit = 0;
  let buy = 0;
  let sell = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if ((prices[j] - prices[i]) > profit) {
        profit = prices[j] - prices[i];
        buy = prices[i];
        sell = prices[j];
      }
    }
  }
  if (profit > 0) {
    hasProfit.innerHTML = 'buy at ' + buy + ' sell at ' + sell + " for a profit of " + profit;
  } else {
    hasProfit.innerHTML = 'no profit';
  }
}


