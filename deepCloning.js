function deepCloning(obj) {
    if(obj === null || typeof obj !== "object") {
        return obj;
    }
    if(Array.isArray(obj)) {
        return obj.map((item) => deepCloning(item))
    }
    const clone = {};
    for(let key in obj) {
        if(obj.hasOwnPropert(key)) {
            clone[key] = deepCloning(obj[key]);
        }
    }
    return clone;
 }