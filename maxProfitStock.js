function maxProfit(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    for(let price of prices) {
        minPrice = Math.min(minPrice, price);
        let profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}

console.log(maxProfit([1,2,3,4,6]))