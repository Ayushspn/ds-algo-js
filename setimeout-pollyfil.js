function customSetTimeout(callback, delay) {
    const start = Date.now(); // Record the start time 12 
    const intervalId = setInterval(() => {
        if (Date.now() - start >= delay) {
            clearInterval(intervalId); // Clear the interval after the delay
            callback(); // Execute the callback
        }
    }, 1); // Check every millisecond
}

// Example usage
customSetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);