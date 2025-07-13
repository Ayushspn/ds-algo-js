function twoSum(nums, target) {
    const numSet = new Set();
    for (let num of nums) {
        const complement = target - num;
        if (numSet.has(complement)) {
            return [complement, num];
        }
        numSet.add(num);
    }
    return [];
}   