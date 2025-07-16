function rotateNumbersByNumbers(arr, num) {
    if (num < 0) {
        num = arr.length + num; // Handle negative rotations
    }
    num = num % arr.length; // Handle rotations greater than array length
    return arr.slice(-num).concat(arr.slice(0, -num));
}