class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return "List is empty";
    }
    let preNode = this.head;
    let temp = this.head;
    while (temp.next) {
      preNode = temp
      temp = temp.next;
    }
    this.tail = preNode;
    this.tail.next = null;
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }

  shift() {
    if (!this.head) {
      return "List is empty"
    }
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return "Provide a valid index"
    }
    if (!this.head) {
      return "List is empty"
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    const temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if(index < 0 || index > this.length) {
      return false;
    }
    if(index=== 0) {
      return this.unShift(value);
    }
    if(index=== this.length) {
      return this.push(value);
    }
    const node = newNode(value);
    const temp = this.get(index-1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length){
      return "Please enter correct index"
    }
    if(index===0){
      return this.shift();
    }
    if(index===this.length-1){
      return this.pop();
    }
    const before = this.get(index-1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp.next;
    for(let i =0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleOfLinkedList() {
    if( ! this.head) {
      return "List is empty"
    }
    let slow = this.head;
    let fast = this.head;
    while(slow.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  findLoop() {
    if( ! this.head) {
      return null;
    }
    const array = [];
    array.push(this.head.value);
    let temp = this.head;
    for(let i =0; i< this.length; i++) {
      if(array.indexOf(temp.next) > -1) {
        return true;
      }
      array.push(temp.next);
    }
    return false;
  }

}