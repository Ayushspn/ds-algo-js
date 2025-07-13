function containCommonItems(arr1, arr2) {
    const set1 = new Set(arr1);
    for (let item of arr2) {
        if (set1.has(item)) {
        return true;
        }
    }
    return false;
}


function containCommonItems2(arr1, arr2) {
   /**
    * Loop through the first array and convert it to a object
    * Then loop through the second array and check if the object has the item
    */
    const obj = {};
    for (let item of arr1) {
        obj[item] = true;
    }
    for (let item of arr2) {
        if (obj[item]) {
            return true;
        }
    }   
    return false;
}