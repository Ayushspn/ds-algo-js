function rContaints(value, currentNode = this.root) {
    if(currentNode === null) return false;

    if(value === currentNode.value) return true;

    if(value < currentNode.value) {
        return this.rContaints(value, currentNode.left);
    }
    else if(value > currentNode.value) {
        return this.rContaints(value, currentNode.right);
    }
}