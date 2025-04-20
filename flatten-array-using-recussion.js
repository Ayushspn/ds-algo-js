function flattenArray(arr) {
    if(arr.length === 0) return arr;
    if(!Array.isArray(arr)) return [arr];
    const flattenArray = [];
    for(let arrItem of arr) {
        if(Array.isArray(arrItem)) {
            const newArray = flattenArray(arrItem);
            for(let item of newArray) {
                flattenArray.push(item);
            }
        } else {
            flattenArray.push(arrItem);
        }
    }
    return flattenArray
}

console.log(flattenArray([1, 2, [3, 4, [5, 6]], 7, [8]])); // [1, 2, 3, 4, 5, 6, 7, 8]