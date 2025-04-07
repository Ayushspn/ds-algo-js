function flattenArrya(arr) {
    const stack = [...arr];
    const result = [];

    while(stack.length) {
        const lastItem = stack.pop();
        if(Array.isArray(lastItem)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse();
}

/// using recursion 

function flattenArray(arr, result=[]) {
    arr.forEach((item) => {
        if(Array.isArray(item)) {
            flattenArray(item, result)
        } else {
            result.push(item);
        }
    })
    return result;
}