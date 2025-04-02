function fibonacciIterative(n) {
    if(n < 2) {
        return n;
    }
    return fibonacciIterative(n-1) + fibonacciIterative(n-2);
}