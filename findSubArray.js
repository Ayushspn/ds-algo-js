function findAllSubarrays(arr) {
    const subarrays = [];

    // Outer loop for the starting index of the subarray
    for (let start = 0; start < arr.length; start++) {
        let currentSubarray = [];
        
        // Inner loop for the ending index of the subarray
        for (let end = start; end < arr.length; end++) {
            currentSubarray.push(arr[end]);
            subarrays.push([...currentSubarray]); // Add the subarray to the result
        }
    }

    return subarrays;
}