function containsDuplicate(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}   

function containCommonItems(arr1, arr2) {
    const set1 = new Set(arr1);
    for (let item of arr2) {
        if (set1.has(item)) {
            return true;
        }
    }
    return false;
}