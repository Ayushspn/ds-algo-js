function camelToSnake(str) {
    let result = "";
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(char === char.toUppercase()) {
            if(i !== 0) {
                result += "_"
            }
            result = result.toLowerCase();
        } else {
            result+= char;
        }
    }
    return result;
}