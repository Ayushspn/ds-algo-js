const numbers = [1, 3, 4, 2, 4, 5, -1];
function bubbleSort(array) {
    const length = array.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }   
    }
}

(bubbleSort(numbers));
console.log(numbers)