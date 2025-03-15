const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
    if(arr1.length === 0 || arr2.length === 0) {
        return false;
    }
    /*loop throw first array and create object 
    where properties ==== item of object
    */
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        const item = arr1[i];
        if (!map[item]) {
            map[item] = true;
        }
    }
    // star looping through second array 
    // and check if items are present in array 
    // by matching the key
    for (let k = 0; k < arr2.length; k++) {
        if (map[arr2[k]]) {
            return true
        }
    }
    return false;
}

console.log(containsCommonItem(array1, array2));

function containsCommonItem2(arr1, arr2) {
    return arr2.some(item => arr1.includes(item));
}

console.log(containsCommonItem(array1, array2))