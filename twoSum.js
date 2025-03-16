function twoSum(array, result) { /// [1,2,3,4,1] 
    if( ! array.length) {
        return;
    }
    const pair = []
    for(let i =0; i< array.length-1; i++) {
        if(array[i] + array[i+1] === result) {
            pair.push(i, i+1);
        }
    }
    return pair;
}

console.log(twoSum([1,2,3,4,1], 2));