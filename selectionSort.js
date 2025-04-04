function selectionSort(array) {
    const length = array.length;
    for(let i =0; i < length; i++) {
        let min = i;
        let temp = array[i];
        for(let j =0; j < length; j++) {
           if(array[j] < array[i]) {
            min = j;
           }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}