function maximumSubArray(array){
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < array.length; i++) {
        currentSum += array[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    
    return maxSum;
}