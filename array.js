const strings = ['a', 'b', 'c', 'd'];
function arrayOperations() {
    strings.push('e'); // O(1)
    strings.pop(); // O(1)
    strings.unshift('x'); // O(n)
    console.log(strings);
}
arrayOperations();