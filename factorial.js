function findFactorialRecursively(number) {
    if(number === 2) {
        return 2
    }
    return number * findFactorialRecursively(number-1)
}