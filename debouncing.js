// Debouncing in js
let counter = 0;
const getData = () => {
    // call API 
    console.log("Fetchig data", counter++);
}

const betterFunction = doSomeMagic(getData, 300);

const doSomeMagic = (fnction, delay) => {
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        let timer = setTimeout(() => {
            fnction(args);
        }, delay)
    }
}