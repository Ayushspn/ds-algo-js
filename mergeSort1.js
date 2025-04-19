function merger(array1, array2) {
    let combine = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combine.push(arr1[i]);
            i++;
        }
        else {
            combine.push(arr2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        combine.push(arr1[i]);
        i++
    }
    while (j < array2.length) {
        combine.push(arr2[j]);
        j++
    }
    return combine;
}

function mergeSort(array) {
    let midIndex = Math.floor(array.length/2);
    if(midIndex === 1) {
        return  array     
    }
    let left = mergeSort(array.slice(0, midIndex));
    let right = mergeSort(array.slice(midIndex));
    return merger(left, right)
}