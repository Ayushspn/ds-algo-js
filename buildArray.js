class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  add(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  size() {
   return this.length;
  }
}

const myArray = new MyArray();
myArray.add('item1');
myArray.add('item2');
myArray.add('item3');
console.log(myArray.size()); // 3
console.log(myArray.get(1)); // 'item2'