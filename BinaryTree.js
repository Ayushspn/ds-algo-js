class Node {
    constructor(value) {
        this.valeu = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) {
                return undefined
            }
            if (newNode.value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode;
                    return this
                }
                temp = temp.left
            } else {
                if (!temp.right) {
                    temp.right = newNode;
                    return this
                }
                temp = temp.right;
            }
        }
    }

    search(value){
        if(this.root === null) {
            return false;
        }
        let temp = this.root;
        while(temp) {
            if(value < temp.left) {
                temp = temp.left;
            } else if(value > temp.right) {
                temp = temp.right
            } else {
                return true;
            }
        }
        return false;
    }
}