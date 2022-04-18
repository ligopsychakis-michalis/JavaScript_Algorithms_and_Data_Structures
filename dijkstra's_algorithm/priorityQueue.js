class PriorityQueue {
    constructor() {
        this.queue = []
    }

    enqueue(val, priority) {
        this.queue.push({ val, priority });
        let index = this.queue.length-1;

        while (index && this.queue[index].priority < this.queue[index-1].priority) {
            [this.queue[index], this.queue[index-1]] = [this.queue[index-1], this.queue[index]];
            index--;
        }

        return this;
    }

    dequeue() {
        return this.queue.shift();
    }
}

module.exports = PriorityQueue;