function processInChunks(array, chunkSize) {
    while(i < array.length) {
        let chunk = array.slice(i, i + chunkSize); // Get the current chunk
        console.log(chunk); // Process the chunk (e.g., print it)
        i += chunkSize; // Move to the next chunk
    }
}

console.log(processInChunks([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Output: [1, 2, 3], [4, 5, 6], [7, 8]