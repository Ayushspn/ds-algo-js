function createFibonacciCache() {
    const cache = {};
    return function fibonacci(n) {
        if(n in cache) {
            return cache[n]
        }
        if(n <=1) return n;
        cache[n] = fibonacci(n-1) + fibonacci(n-1);
        return cache[n]

    }
}