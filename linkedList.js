class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class  LinkedList {
    constructor(value) {
        this.head = {
          value : value,
          next: null
        } 
        this.tail = this.head;
        this.length = 1; 
    }

    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
      return this
    }

    prepend(value){
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = next;
      this.length++;
      return this;
    }

    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }

    insert(index, value) {
      //check the paramas
      if(index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value : value,
        next: null
      }
      const leader = this.traverseToLeader(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++
      return this.printList();
    }

    remove(index) {
      const leader = this.traverseToLeader(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
    }

    traverseToLeader(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++
      }
      return currentNode;
    }

    reverse() {
      if( ! this.head.next) {
        return this;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      return this;
    }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);