const numbers = [1, 3, 4, 2, 4, 5, -1];
function bubbleSort1(array) {
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

(bubbleSort1(numbers));
console.log(numbers)


function bubbleSort(array) {
    const length = array.length;
    for(let i = length-1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }   
    }
}