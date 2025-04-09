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

function deletNodes(value, currentNoderoot) {
    if(currentNode === null) {
        return null;
    }

    if(value < currentNode.Value) {
        currentNode.left = this.deletNodes(value, currentNode.left)
    } if(value > currentNode.Value) {
        currentNode.right = this.deletNodes(value, currentNode.right)
    }
    return currentNode;
}