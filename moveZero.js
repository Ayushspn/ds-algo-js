function moveZero(array) {
    if(array &&  ! array.length) {
        return 'Please enter valid array';
    }
    let nonZeroArray = [];
    const zeroArryay = []
    for(let i = 0; i< array.length; i++) {
        if(array[i] === 0) {
            zeroArryay.push(array[i]);
        } else {
            nonZeroArray.push(array[i]);
        }
    }

    // nonZeroArray = array.filter((item) => item !== 0)
    // const dirrenceLenth = array.length - nonZeroArray.length;
    // for(let i =0; i<=dirrenceLenth; i++) {
    //     zeroArryay.push(0);
    // }
    return [...nonZeroArray, ...zeroArryay];
}

console.log(moveZero([1,0,3,4,5,0, 0]))