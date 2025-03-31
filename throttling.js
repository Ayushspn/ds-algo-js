const expensive = () => {
    console.log("expensive function")
}

const betterFunction = throttleFunction(expensive, limit);


const throttleFunction = (fnction, limit) => {
    let isThrottle = true;
    return (...args)=>{
        if (isThrottle) {
            fnction(args);
            isThrottle = false;
        }
        setTimeout(() => {
            isThrottle = true;
        }, limit)
    }
}

