function findMaxMin(array) {
    let i = 0;
    let min = array[i];
    let max = array[i];

    while(i < array.length) {
        i++;
        if(array[i] > max) {
            max = array[i]
        }
        if(array[i] <  min) {
            min = array[i]
        }
    }

    return [max, min]
}