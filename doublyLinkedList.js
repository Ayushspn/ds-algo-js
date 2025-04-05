class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;

  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined
    }
    if (this.length === 1) {
      this.head = 0;
      this.tail = 0;
    } else {
      let temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null
      this.length--;
      return temp;
    }

  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++
    return this
  }
  shift() {
    if (this.length === 0) {
      return "Link list is empty"
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    if (index < 0 || index > this.length) {
      return "Please enter valid index";
    }
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length-1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
   set(index, value) {
    let temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true;
    }
    return false;
   }
   insert(value, index) {
    if(index < 0 || index > this.length) {
      `Please enter valid index between ${0} and ${this.length}`
    }
    if(this.length === 0){
      return this.unShift(value);
    }
    if(index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    let before = this.get(index-1);
    let temp = before.next;
    before.next = newNode;
    newNode.next = temp;
    newNode.prev = before;
    temp.orev = newNode;
    this.length++
    return true;
   }
   remove(index) {
    if( index === 0) {
      return this.shift()
    }
    if(index === this.length) {
      return this.pop();
    }
   }
}