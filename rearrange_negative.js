function rearrangeNegative(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArray.shift(arr[i]); // Add negative numbers to the front
        } else {
            newArray.push(arr[i]); // Add non-negative numbers to the end
        }
    }
    return newArray;
}

console.log