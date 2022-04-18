class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // actually push
    enqueue(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this.size;
    }

    // actually shift
    dequeue() {
        if (this.size === 0) return undefined;
        const removedNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            removedNode.next = null;
        }

        this.size--;
        return removedNode;
    }
}

// const queue = new Queue();
// console.log(queue.enqueue('first'));
// console.log(queue.enqueue('second'));
// console.log(queue.enqueue('third'));
// console.log(queue.enqueue('fourth'));
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());