function maxSubarraySum(array, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Check if the array length is less than k
    if (array.length < k) {
        return null; // or throw an error
    }
    let i = 0;
    while(i < array.length) {
        // Add the next k elements to the current sum
        for (let j = i; j < i + k; j++) {
            currentSum += array[j];
        }

        // Update maxSum if currentSum is greater
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        // Remove the first element of the current window from currentSum
        currentSum -= array[i];

        // Move to the next window
        i++;
    }
   
    return maxSum; 
}

console.log(maxSubarraySum([1, 2, 3, 4, 5], 2)); // Output: 9 (subarray: [4, 5])