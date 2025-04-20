function intrectionArray(array1, arr) {
  return array1.filter((item) => arr.includes(item));
}

console.log(intrectionArray([1, 2, 3, 4, 5], [2, 4])); // [2, 4]
console.log(intrectionArray([1, 2, 3, 4, 5], [6, 7])); // []