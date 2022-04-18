class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            // if first node, set head and tail
            this.head = newNode;
            this.tail = this.head;
        } else {
            // update the next pointer of the previous tail
            this.tail.next = newNode;
            // update the tail of the list based on the last pushed node
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }

    pop() {
        // handle case where list is empty
        if (this.length === 0) return undefined;
        // keep track of two last nodes while iterate through the list
        let lastNode = this.head;
        let previousNode = null;
        // find two last nodes of the list
        while(lastNode.next) {
            previousNode = lastNode;
            lastNode = lastNode.next
        }
        // update tail (and head if length of list is 1)
        if (previousNode) {
            this.tail = previousNode;
            this.tail.next = null;
        } else {
            this.tail = null;
            this.head = null;
        }    

        this.length--;
        return lastNode;
    }

    shift() {
        // handle case where list is empty
        if (this.length === 0) return undefined;
        // store the shifted head to return it
        const shiftedHead = this.head;
        // update the head of the list (and the tail if list had 1 node)
        this.head = this.head.next;
        if (this.length === 1) this.tail = null;

        this.length--;
        return shiftedHead;
    }

    unshift(value) {
        // store previous head and update to new one
        const previousHead = this.head;
        this.head = new Node(value);
        // set the next pointer of the new head (and the tail if the list was empty)
        this.head.next = previousHead;
        if (!this.tail) this.tail = this.head;

        this.length++;
        return this;
    }

    get(index) {
        // handle case of not existing index
        if (index < 0 || index > this.length - 1) return null;
        // loop through list until node found
        let count = 0;
        let foundNode = this.head;
        while (count !== index) {
            foundNode = foundNode.next;
            count++;
        }

        return foundNode;
    }

    set(index, value) {
        // get method to get node and update it's value if exists
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return this;
        } else {
            return false;
        }    
    }

    insert(index, value) {
        // handle edge cases and always return a boolean
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        // insert the new Node in the list
        const foundNode = this.get(index - 1);
        const newNode = new Node(value);
        newNode.next = foundNode.next;
        foundNode.next = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        // handle edge cases
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        // remove node from the list
        const nodeToDelete = this.get(index);
        const previousNode = this.get(index - 1);
        previousNode.next = nodeToDelete.next;
        
        this.length--;
        return nodeToDelete;
    }

    reverse() {
        // handle edge cases
        if (this.length < 2) return this;
        // store init values
        let currentNode = this.head;
        let previousNode = this.head.next;
        let nextNode = null;
        // loop through list and chage it's direction
        while (previousNode) {
            currentNode.next = nextNode;
            nextNode = currentNode;
            currentNode = previousNode;
            previousNode = previousNode.next;
        }   
        // swap head - tail of list
        [this.head, this.tail] = [this.tail, this.head];
        this.head.next = nextNode;

        // return the whole list
        return this;
    }

    print(node = this.head) {
        if (this.length > 0) {
            console.log(node.value);
            if (node.next) this.print(node.next);
        } else {
            console.log('Empty list!')
        }
    }
}

// let list = new SinglyLinkedList();

// console.log('push items');
// list.push(10);
// list.push(20);
// list.push(30);
// list.push(40);
// list.push(50);
// list.push(60);
// list.print();
// console.log('length of list: ', list.length)
// console.log('---------------------------------');
// console.log("pop two items");
// list.pop();
// list.pop();
// list.print();
// console.log('length of list: ', list.length)
// console.log('---------------------------------');
// console.log("shift four items");
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.print();
// console.log('length of list: ', list.length)
// console.log('---------------------------------');
// console.log("unshift four items");
// list.unshift(60);
// list.unshift(50);
// list.unshift(40);
// list.unshift(20);
// list.unshift(10);
// list.print();
// console.log('length of list: ', list.length)
// console.log('---------------------------------');
// console.log("get second item: ", list.get(1)?.value);
// console.log("get first item: ", list.get(0)?.value);
// console.log("get fifth item: ", list.get(4)?.value);
// console.log("get tenth item: ", list.get(9)?.value);
// console.log('---------------------------------');
// console.log('set some values')
// list.set(0, 100);
// list.set(1, 200);
// list.set(2, 400);
// list.set(3, 500);
// list.set(4, 600);
// list.set(-1, 1000);
// list.print();
// console.log('---------------------------------');
// console.log('insert some values');
// list.insert(2, 300);
// list.insert(0, 0);
// list.insert(7, 700);
// list.insert(10, 800);
// list.print();
// console.log('---------------------------------');
// console.log('remove some values');
// list.remove(0);
// list.remove(6);
// list.remove(3);
// list.remove(-2);
// list.print();
// console.log('---------------------------------');
// console.log('reverse list');
// list.reverse();
// list.print();