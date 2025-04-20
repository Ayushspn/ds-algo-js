function findMissingNumbers(arr, n) {
 const actualSum = arr.reduce((acc, num) => acc + num, 0);
 const idealSum = n * (n + 1) / 2;  // Sum of first n natural numbers
 const missingSum = idealSum - actualSum;
  return missingSum;
}


function findMissingTwoNumbers(arr, n) {
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    const idealSum = n * (n + 1) / 2;  // Sum of first n natural numbers
    const missingSum = idealSum - actualSum;
     return missingSum;
   }