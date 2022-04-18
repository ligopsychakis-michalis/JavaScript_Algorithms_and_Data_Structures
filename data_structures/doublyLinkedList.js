class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(newValue) {
        // create new node
        const newNode = new Node(newValue);
        // handle edge case of empty list - else push newNode
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        // update length and return list
        this.length++;
        return this;
    }

    pop() {
        const removedNode = this.tail;
        // handle edge case of length 0 or 1
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {  // pop last node and update the tail
            this.tail = removedNode.previous;
            this.tail.next = null;
            removedNode.previous = null;
        }    
        // decrement length and return removed node
        this.length--;
        return removedNode;
    }

    shift() {
        // handle edge case of length 0
        if (this.length === 0) return undefined;
        // declare removed node
        let removedNode = this.head;
        if (this.length === 1) {  // handle edge case of length 1
            this.head = null;
            this.tail = null;
        } else { // shift first node and update the head
            this.head = removedNode.next;
            this.head.previous = null;
            removedNode.next = null
        }
        // decrement length and return removed node
        this.length--;
        return removedNode;
    }

    unshift(value) {
        // create new node
        const newNode = new Node(value);
        // handle edge case of length 0
        if (this.length === 0) return this.push(value);
        // update the head
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        // increment length and return the list
        this.length++;
        return this;
    }

    get(index) {
        // handle edge case of invalid index
        if (index < 0 || index >= this.length) return undefined;
        // decide from what side to start looking
        let startPoint = 'head';
        if (index > (this.length / 2)) startPoint = 'tail';
        // loop throught the list and find the node at that index
        let foundNode = this[startPoint];
        const step = startPoint === 'head' ? 'next' : 'previous';
        let countStep = startPoint === 'head' ? 1 : -1;
        let count = startPoint === 'head' ? 0 : this.length - 1;

        while (count !== index) {
            foundNode = foundNode[step];
            count += countStep; 
        }
        // return found node
        return foundNode;
    }

    set(index, value) {
        // get the node from that index
        const foundNode = this.get(index);
        // handle edge case of node not exists
        if (!foundNode) return false;
        // update node and return true
        foundNode.value = value;
        return true;
    }

    insert(index, value) {
        // create new node
        const newNode = new Node(value);
        // handle invalid index
        if (index < 0 || index > this.length) return false;
        // handle edge cases of index 0 or equals to length
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        // insert the new node
        const currentNode = this.get(index);
        newNode.next = currentNode;
        newNode.previous = currentNode.previous;
        currentNode.previous.next = newNode;
        currentNode.previous = newNode;
        // increment length and return true
        this.length++;
        return true;
    }

    remove(index) {
        // handle edge cases 
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        // find and remove the node in that index
        const nodeToRemove = this.get(index);
        nodeToRemove.previous.next = nodeToRemove.next;
        nodeToRemove.next.previous = nodeToRemove.previous
        nodeToRemove.next = null;
        nodeToRemove.previous = null;
        // decrement length return removed node
        this.length--;
        return nodeToRemove;
    }

    reverse() {
        // handle edge cases
        if (this.length < 2) return this;
        // declare starting point
        let reverseNode = this.tail;
        // loop through list and swap prev with next of each Node
        while(reverseNode) {
            [reverseNode.previous, reverseNode.next] = [reverseNode.next, reverseNode.previous];
            reverseNode = reverseNode.next;
        }
        // swap head with tail and return the list
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }

    print() {
        const arr = [];

        function addValueOfNode(node) {
            if (node) {
                arr.push(node.value);
                addValueOfNode(node.next);
            } 
        }
        if (this.head) addValueOfNode(this.head)

        console.log( arr.length > 0 ? arr.join(', ') : 'Empty List!!!' );
    }
}

// // create
// const list = new DoublyLinkedList();
// // push
// console.log('-- push --');
// list.push(10);
// list.push(20);
// list.push(30);
// list.push(40);
// list.push(50);
// list.push(60);
// list.push(70);
// list.push(80);
// list.push(90);
// list.push(100);
// list.print();
// // pop
// console.log('-- pop --');
// list.pop();
// list.print();
// // shift
// console.log('-- shift --');
// list.shift();
// list.print();
// // unshift
// console.log('-- unshift --');
// list.unshift(10);
// list.unshift(0);
// list.print();
// // get
// console.log('-- get --');
// console.log(list.get(-3)?.value);
// console.log(list.get(8)?.value);
// // set
// console.log('-- set --');
// list.set(-3, 26);
// list.set(8, 93);
// list.print();
// // insert
// console.log('-- insert --');
// list.insert(18, 105);
// list.insert(3, 33);
// list.insert(0, -10);
// list.insert(8, 88);
// list.print();
// // remove
// console.log('-- remove --');
// list.remove(-8);
// list.remove(0);
// list.remove(3);
// list.remove(6);
// list.remove(8);
// list.remove(8);
// list.print();
// // reverse
// console.log('-- reverse --');
// list.reverse();
// list.print();