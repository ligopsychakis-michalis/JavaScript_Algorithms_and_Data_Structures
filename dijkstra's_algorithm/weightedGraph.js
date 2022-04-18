const PriorityQueue = require('./PriorityQueue.js');

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []; 
        }

        return this;
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            const foundVertex2Ind = this.adjacencyList[vertex1].findIndex(vertex => vertex.node === vertex2);
            const foundVertex1Ind = this.adjacencyList[vertex2].findIndex(vertex => vertex.node === vertex1);
            
            if (foundVertex2Ind >= 0) {
                // handle case of already existing edge by updating the weight
                this.adjacencyList[vertex1][foundVertex2Ind].weight = weight;
            } else {
                // push new edge
                this.adjacencyList[vertex1].push({ node: vertex2, weight });
            }

            if (foundVertex1Ind >= 0) {
                // handle case of already existing edge by updating the weight
                this.adjacencyList[vertex2][foundVertex1Ind].weight = weight;
            } else {
                // push new edge
                this.adjacencyList[vertex2].push({ node: vertex1, weight });
            }
        }

        return this;
    }

    // Dijksta's algorithm - the sortest path from point A to point B
    dijkstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest;

        // build up initial state
        Object.keys(this.adjacencyList).forEach(key => {
            if (key === start) {
                distances[key] = 0;
                nodes.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                nodes.enqueue(key, Infinity);
            }    
        });

        // loop over priority queue
        while(nodes.queue.length) {
            smallest = nodes.dequeue().val;

            if (smallest === end) {
                // done, now return the shortest path
                let current = end;
                while (current) {
                    path.push(current);
                    current = previous[current];
                }

                return path.reverse();
            } else {
                // loop over smallest neighbors
                this.adjacencyList[smallest].forEach(neighbor => {
                    // calculate a possibly shortest path than the previous 
                    let candidate = distances[smallest] + neighbor.weight;
                    
                    // if it's actually sortests
                    if (candidate < distances[neighbor.node]) {
                        // update distance
                        distances[neighbor.node] = candidate;
                        // updated previous node - (how we got there)
                        previous[neighbor.node] = smallest;
                        // update on priority queue 
                        nodes.enqueue(neighbor.node, candidate);
                    }
                });
            }

        }
    }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex('A').addVertex('B').addVertex('C').addVertex('D').addVertex('E').addVertex('F');
weightedGraph.addEdge('A', 'B', 4).addEdge('A', 'C', 2).addEdge('B', 'E', 3).addEdge('C', 'D', 2).addEdge('C', 'F', 4).addEdge('D', 'E', 3).addEdge('D', 'F', 1).addEdge('E', 'F', 1);
console.log(weightedGraph.dijkstra('A', 'E'));