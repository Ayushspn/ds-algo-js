function maxSubarray(nums) {
    if(nums.length === 0) {
        return 0;
    }
     let maxSum = nums[0];
     let currentSum = maxSum;
     for(let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum+nums[i]);
        maxSum = Math.max(maxSum, currentSum);
     }
}

//[1,2,3,4,5]