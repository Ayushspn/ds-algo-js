const isPallandrome = (number) => {
    return number.toString() === number.toString().split('').reverse().join('');
}