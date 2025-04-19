function rotate(arr, num) {
    const newArray = [];
    let i = 1
    if(num === 0) {
        return arr;
    }
    if(num > arr.length) {
        num = num % arr.length;
    }
    for(let i = 0; i < arr.length-num; i++) {
        newArray.push(arr[i]);  
    }
    while(i <= num) {
        const popEle = arr.pop();
        i++
        newArray.unshift(popEle)
    }
    return newArray;
}
// [1,2,3,4,5] 3,4,5

console.log(rotate([1,2,3,4,5], 3))