if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
        if (count < 0) {
            throw new RangeError("Repeat count must be non-negative");
        }
        if (count === Infinity) {
            throw new RangeError("Repeat count must be less than infinity");
        }
        count = Math.floor(count); // Ensure count is an integer
        let result = "";
        for (let i = 0; i < count; i++) {
            result += this; // Append the string to the result
        }
        return result;
    };
}

// Example usage:
console.log("abc".repeat(3)); // Output: "abcabcabc"
console.log("hello".repeat(0)); // Output: ""