function findSecondLargest(array) {
    let i = 0;
    let max = array[i];
    let secondMax = -Infinity;

    while(i < array.length) {
        i++;
        if(array[i] > max) {
            secondMax = max;
            max = array[i]
        }
        else if(array[i] > secondMax && array[i] !== max) {
            secondMax = array[i]
        }
    }

    return [max, secondMax]
}