function maxSubArraySum(arr) {
    let maxSoFar = arr[0]; // Initialize with the first element
    let currentMax = arr[0]; // Tracks the maximum sum ending at the current position

    for (let i = 1; i < arr.length; i++) {
        // Update currentMax to include the current element or start a new subarray
        currentMax = Math.max(arr[i], currentMax + arr[i]);
       /// console.log(`Current max: ${currentMax}`); // Debugging line to show current max
        // Update maxSoFar if currentMax is greater
        maxSoFar = Math.max(maxSoFar, currentMax);
        console
    }

    return maxSoFar;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (subarray: [4, -1, 2, 1])