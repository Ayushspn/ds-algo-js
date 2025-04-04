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

}