class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.height = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.height=== 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.height++
        return this;
    }

    pop() {
        if(this.height=== 0) {
            return undefined
        }
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.lenth--;
        return temp;
    }
}