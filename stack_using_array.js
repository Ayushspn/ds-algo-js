class  Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        if(! this.array.length) {
            return 'Stack is empty';
        }
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}