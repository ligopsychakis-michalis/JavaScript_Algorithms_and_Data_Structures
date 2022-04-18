class MaxBinaryHeap {
    constructor() {
        this.values = [];
    };

    insert(value) {
        // not insert if already exists
        if (this.values.includes(value)) return this;
        // push value to end of heap
        this.values.push(value);
        
        // bubble value to correct spot
        if (this.values.length > 1) {
            let valueIndex = this.values.length - 1;
            let parentIndex = Math.floor((valueIndex - 1) / 2);
            let correctPlaceFound = value < this.values[parentIndex];

            while (!correctPlaceFound) {
                // swap value with it's parent node
                [this.values[parentIndex], this.values[valueIndex]] = [this.values[valueIndex], this.values[parentIndex]];
                // update variables
                valueIndex = parentIndex;
                parentIndex = Math.floor((valueIndex - 1) / 2);
                // check if correct place found
                if (valueIndex === 0 || value < this.values[parentIndex]) correctPlaceFound = true;
            }
        }

        return this;
    }

    extractMax() {
        const max = this.values[0];
        // drop the root node (max)
        this.values.shift();
        if (this.values.length < 2 ) return max;
        // bring on root the last node of the heap
        this.values.unshift(this.values[this.values.length - 1]);
        this.values.pop();
        // heapify down the root node
        let child1Ind = 1;
        let currentInd = 0;
        while (true) {
            // break if child not exists
            if (child1Ind >= this.values.length) break;

            if (this.values[currentInd] > this.values[child1Ind] && (this.values[currentInd] > this.values[child1Ind + 1] || child1Ind + 1 >= this.values.length)) {
                // case of current is bigger from childs
                break;
            } else if (this.values[currentInd] < this.values[child1Ind] && this.values[currentInd] > this.values[child1Ind + 1]) {
                // case of left child only is bigger than current
                swap(currentInd, child1Ind, this.values);
            } else if (this.values[currentInd] > this.values[child1Ind] && this.values[currentInd] < this.values[child1Ind + 1]) {
                // case of right child only is bigger than current
                swap(currentInd, child1Ind + 1, this.values);
            } else if (this.values[currentInd] < this.values[child1Ind] && this.values[currentInd] < this.values[child1Ind + 1]) {
                // case of all childs are bigger than current - (swap with the bigger one)
                if (this.values[child1Ind] > this.values[child1Ind + 1]) {
                    swap(currentInd, child1Ind, this.values);
                } else {
                    swap(currentInd, child1Ind + 1, this.values);
                }
            }
        }

        function swap (ind, ind2, values) { // 'ind' must be the current index
            let val = values[ind];
            values[ind] = values[ind2];
            values[ind2] = val;

            currentInd = ind2;
            child1Ind = 2*currentInd + 1
        }

        return max;
    }
}

// const maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(10);
// maxBinaryHeap.insert(20);
// maxBinaryHeap.insert(40);
// maxBinaryHeap.insert(30);
// maxBinaryHeap.insert(100);
// maxBinaryHeap.insert(40);
// maxBinaryHeap.insert(25).insert(35);
// console.log(maxBinaryHeap.extractMax());
//               100
//         40           35
//      10    30     20    25
