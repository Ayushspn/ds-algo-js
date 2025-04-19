function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i];
        for (let j = 0; j < length; j++) {
            if (array[j] < array[i]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}


function selectionSort1(array) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[i]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;

        }
    }
    return array;
}