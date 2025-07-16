function moveZerosWithPush(array) {
    const result = [];
    let zeroCount = 0;
    for (let num of array) {
        if (num !== 0) {
            result.push(num);
        } else {
            zeroCount++;
        }
    }
    while (zeroCount--) {
        result.push(0);
    }
    return result;
}