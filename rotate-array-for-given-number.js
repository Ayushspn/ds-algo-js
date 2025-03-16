function rotateNumberTillGivenNumber(array , number){
    if( ! array.length) {
        return "Please enter valid array";
    }
    if(number < 0 || number > array.length) {
        return "Please enter valid number";
    }
    const splicesArray = array.splice(0, number);
    return [...array, ...splicesArray];
}

console.log(rotateNumberTillGivenNumber([1,2,3,4,5], 3))
console.log(rotateNumberTillGivenNumber([1,2,3,4,5], 10))