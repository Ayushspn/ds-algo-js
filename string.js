// reverse a string function
function reverseAString(str) {
    // check input 
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmmm thats not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i>=0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

//console.log(reverseAString("Hello I am Ayush"));

function reverseString2(str) {
    return str.split('').reverse().join('');
}

const reverseString3 = str => [...str].reverse().join('');

console.log(reverseString3("Hello I am Ayush"));