class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {  // actually a min binary heap
    constructor() {
        this.nodes = [];
    };

    enqueue(value, priority) {
        const node = new Node(value, priority);
        // push value to end of heap
        this.nodes.push(node);
        
        // bubble value to correct spot
        if (this.nodes.length > 1) {
            let nodeIndex = this.nodes.length - 1;
            let parentIndex = Math.floor((nodeIndex - 1) / 2);
            let correctPlaceFound = node?.priority >= this.nodes[parentIndex]?.priority;

            while (!correctPlaceFound) {
                // swap value with it's parent node
                [this.nodes[parentIndex], this.nodes[nodeIndex]] = [this.nodes[nodeIndex], this.nodes[parentIndex]];
                // update variables
                nodeIndex = parentIndex;
                parentIndex = Math.floor((nodeIndex - 1) / 2);
                // check if correct place found
                if (nodeIndex === 0 || node?.priority >= this.nodes[parentIndex]?.priority) correctPlaceFound = true;
            }
        }

        return this;
    }

    dequeue() {
        const prior = this.nodes[0];
        // drop the root node
        this.nodes.shift();
        if (this.nodes.length < 2 ) return prior;
        // bring on root the last node of the heap
        
        this.nodes.unshift(this.nodes[this.nodes.length - 1]);
        this.nodes.pop();
        // heapify down the root node
        let child1Ind = 1;
        let currentInd = 0;
        while (true) {
            // break if child not exists
            if (child1Ind >= this.nodes.length) break;

            if (this.nodes[currentInd]?.priority < this.nodes[child1Ind]?.priority && (this.nodes[currentInd]?.priority < this.nodes[child1Ind + 1]?.priority || child1Ind + 1 >= this.nodes.length)) {
                break;
            } else if (this.nodes[currentInd]?.priority > this.nodes[child1Ind]?.priority && this.nodes[currentInd]?.priority < this.nodes[child1Ind + 1]?.priority) {
                swap(currentInd, child1Ind, this.nodes);
            } else if (this.nodes[currentInd]?.priority < this.nodes[child1Ind]?.priority && this.nodes[currentInd]?.priority > this.nodes[child1Ind + 1]?.priority) {
                swap(currentInd, child1Ind + 1, this.nodes);
            } else if (this.nodes[currentInd]?.priority > this.nodes[child1Ind]?.priority && this.nodes[currentInd]?.priority > this.nodes[child1Ind + 1]?.priority) {
                if (this.nodes[child1Ind]?.priority < this.nodes[child1Ind + 1]?.priority) {
                    swap(currentInd, child1Ind, this.nodes);
                } else {
                    swap(currentInd, child1Ind + 1, this.nodes);
                }
            }
        }

        function swap (ind, ind2, nodes) { // 'ind' must be the current index
            let val = nodes[ind];
            nodes[ind] = nodes[ind2];
            nodes[ind2] = val;

            currentInd = ind2;
            child1Ind = 2*currentInd + 1
        }

        return prior;
    }
}

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('small pain', 3);
// priorityQueue.enqueue('small pain', 4);
// priorityQueue.enqueue('huge pain', 1);
// priorityQueue.enqueue('medium pain', 2);
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
// console.log(priorityQueue.dequeue());
//               1
//          2         3  
//      3
