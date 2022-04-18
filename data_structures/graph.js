class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2);
            if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1); 
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) { 
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1);
        }
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(item => this.removeEdge(vertex, item));
        delete this.adjacencyList[vertex];
    }

    dfsRecursive(startingVertex) {
        const visited = {};
        const result = [];

        function helper(vertex) {
            if (!this.adjacencyList[vertex] || this.adjacencyList[vertex].length === 0) return;
            visited[vertex] = true;
            result.push(vertex);

            for (let child of this.adjacencyList[vertex]) {
                if (!visited[child]) helper.call(this, child);
            }
        }

        helper.call(this, startingVertex);
        return result;
    }

    dfs(startingVertex) {
        if (!this.adjacencyList[startingVertex]) result;
        const stack = [startingVertex];
        const visited = {};
        const result = [];
        visited[startingVertex] = true;

        while(stack.length) {
            const current = stack.pop();
            result.push(current);

            for (let child of this.adjacencyList[current]) {
                if (!visited[child]) {
                    stack.push(child);
                    visited[child] = true;
                }
            }
        }

        return result;
    }

    bfs(startingVertex) {
        if (!this.adjacencyList[startingVertex]) result;
        const queue = [startingVertex];
        const visited = {};
        const result = [];
        visited[startingVertex] = true;

        while(queue.length) {
            const current = queue.shift();
            result.push(current);

            for (let child of this.adjacencyList[current]) {
                if (!visited[child]) {
                    queue.push(child);
                    visited[child] = true;
                }
            }
        }

        return result;
    }

    print() {
        console.log(this.adjacencyList)
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph.dfsRecursive('A'));
console.log(graph.dfs('A'));
console.log(graph.bfs('A'));