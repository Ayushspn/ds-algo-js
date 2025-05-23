class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = []
            return true;
        }
        return false
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
            this.adjacentList[vertex1].push(vertex2);
            this.adjacentList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
            this.adjacentList[vertex1] = this.adjacentList[vertex1]
                .filter((vertx) => vertx !== vertex2)
            this.adjacentList[vertex2] = this.adjacentList[vertex2]
                .filter((vertx) => vertx !== vertex1)
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return undefined
        }
        while (this.adjacentList[vertex].length) {
            let temp = this.adjacentList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacentList[vertex];
    }
}