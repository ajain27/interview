// Best time to buy and sell stock, retrun max profit

// input prices = [7,1,5,3,6,4] == output :5
// input prices = [7,6,4,3,1] == output : 0

const maxProfit = (prices) => {
  //   let maxProfit = 0;
  //   // buying day
  //   for (let i = 0; i < prices.length - 1; i++) {
  //     // selling day
  //     for (let j = 1 + 1; j < prices.length; j++) {
  //       const currentProfit = prices[j] - prices[i];
  //       if (currentProfit > maxProfit) maxProfit = currentProfit;
  //     }
  //   }
  //   return maxProfit;
  let bought = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < bought) {
      bought = prices[i];
    }
    let currentProfit = prices[i] - bought;
    profit = Math.max(profit, currentProfit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 9, 4]));
