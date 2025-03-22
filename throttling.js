const expensive = () => {
    console.log("expensive function")
}

const betterFunction = throttleFunction(expensive, limit);


const throttleFunction = (fnction, limit) => {
    let isThrottle = true;
    return function() {
        if(isThrottle) {
            fnction();
            isThrottle = false;
        }
        setTimeout(() => {
            isThrottle = true;
        }, limit)
    }
}

