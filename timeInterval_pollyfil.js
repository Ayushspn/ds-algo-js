function customSetInterval(callback, interval) {
    let timerId = null;

    function repeat() {
        callback(); // Execute the callback
        timerId = setTimeout(repeat, interval); // Schedule the next execution
    }

    timerId = setTimeout(repeat, interval); // Start the first execution
    return timerId; // Return the timer ID for reference
}

function customSetInterval(callback, interval) {
    let isRunning = true; // To control the loop
    const start = Date.now(); // Record the start time

    function loop() {
        while (isRunning) {
            const now = Date.now();
            if (now - start >= interval) {
                callback(); // Execute the callback
                break; // Reset the loop
            }
        }
    }

    return loop;
}