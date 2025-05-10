const twoSum = (nums, target) => {
    for(let i =0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(nums.indexOf(complement) !== -1 && nums.indexOf(complement) !== i) {
            return [i , nums.indexOf(complement)]
        }
    }
}