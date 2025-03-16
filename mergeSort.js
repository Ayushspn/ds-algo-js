function mergeSortedArray1(array1, array2) {
    const mergedArray = [];
    mergedArray = [...array1, ...array2];
    return mergedArray;
}


function mergeSortedArray2(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    if(array1.length === 0) {
        return array1;
    }

    if(array2.length === 0) {
        return array2;
    }
}