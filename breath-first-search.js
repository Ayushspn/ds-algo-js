function BFS() {
    let currentNode = this.root;
    const queue = [];
    const result = [];
    queue.push(currentNode);
    while(queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode.value);
        if(currentNode.left) {
            queue.push(currentNode.left)
        }
        if(currentNode.right) {
            queue.push(currentNode.right)
        }
    }

    return result;

}