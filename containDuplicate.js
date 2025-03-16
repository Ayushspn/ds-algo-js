function containsDuplicate(array, no) {
    if (!array.length) {
        return false;
    }
    let isDoublesuplicate = false;
    for (let i = 0; i < array.length - 1; i++) {
        const filteredItems = array.filter((item) => item === array[i])
        if(filteredItems.length >1) {
            isDoublesuplicate = true;
        }
    }
    return isDoublesuplicate;
}

console.log(containsDuplicate([1, 3, 4, 5, 6, 1, 6]))