class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // unshift actually in order to avoid to loop through the entire list
    push(value) {  
        const newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;
        return this.size;
    }

    // shift actually in order to avoid to loop through the entire list
    pop() {
        if (this.size === 0) return undefined;
        const removedNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        
        this.size--;
        removedNode.next = null;
        return removedNode;
    }

    print(node = this.first) {
        if (node) {
            console.log(node.value);
            this.print(node.next);
        }
        if (this.size === 0) console.log('epmty stack');
    }
}


// const stack = new Stack();
// console.log('push ', stack.push(0));
// console.log('push ', stack.push(10));
// console.log('push ', stack.push(20));
// console.log('push ', stack.push(30));
// console.log('pop ', stack.pop());
// console.log('pop ', stack.pop());
// console.log('pop ', stack.pop());
// console.log('pop ', stack.pop());