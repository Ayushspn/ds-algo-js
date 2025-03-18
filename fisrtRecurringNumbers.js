function firtsRecurringCharacter(input) { // o(n^2)
    for(let i =0; i< input; i++) {
        for(let j = i+1; j< input; j++) { 
            if(input[i] === input[j]) {
                return input[i]
            }
        } 
    }

    return undefined;
}

function firtsRecurringCharacter2(input) { // o(n^2)
    let map = {};
    for(let i =0; i< input; i++) {
        if(map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }
    return undefined;
} // O(n)


// negative side 

// Unordered 
// sloe key iteration