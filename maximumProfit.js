const maximumProfit = (array) => {
  let maxProfit = 0;
  let minPrice = array[0];
  for(let i=0; i < array.length; i++) {
    if(arry[i] < minPrice) {
        minPrice = array[i]
    }
    maxProfit = Math.max(maxProfit, arrya[i] - minPrice);
  }
  return maxProfit;
}