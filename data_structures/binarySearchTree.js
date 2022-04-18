class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                let point;
                if (value > currentNode.value) point = 'right';
                else if (value < currentNode.value) point = 'left';
                else break;  // case of equals 
                
                if (currentNode[point]) {
                    currentNode = currentNode[point];
                }
                else {
                    currentNode[point] = newNode;
                    break;
                }
            }
        }    

        return this;
    }

    find(value) {
        if (!this.root) return false;
        let checkNode = this.root;
        while(true) {
            if (!checkNode || checkNode?.value === value) break;
            else if (value > checkNode.value) checkNode = checkNode.right;
            else checkNode = checkNode.left;
        }

        return !!checkNode;
    }

    // \/-------------------------- Tree Traversal --------------------------\/
    breadthFirstSearch() {
        if (!this.root) return [];
        const qeue = [this.root];
        const result = [];

        while (qeue.length) {
            if (qeue[0]?.left) qeue.push(qeue[0]?.left);
            if (qeue[0]?.right) qeue.push(qeue[0]?.right);
            result.push(qeue.shift().value);
        }

        return result;
    }

    depthFirstSearchPreOrder() {
        if (!this.root) return [];
        const result = [];

        function helper(node) {
            result.push(node.value);
            if (node?.left) helper(node.left);
            if (node?.right) helper(node.right);
        }
        helper(this.root);

        return result;
    }

    depthFirstSearchPostOrder() {
        if (!this.root) return [];
        const result = [];

        function helper(node) {
            if (node?.left) helper(node.left);
            if (node?.right) helper(node.right);
            result.push(node.value)
        }
        helper(this.root);

        return result;
    }

    depthFirstSearchInOrder() {
        if (!this.root) return [];
        const result = [];

        function helper(node) {
            if (node?.left) helper(node.left);
            result.push(node.value)
            if (node?.right) helper(node.right);
        }
        helper(this.root);

        return result;
    }
}

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(10);
// binarySearchTree.insert(20);
// binarySearchTree.insert(5);
// binarySearchTree.insert(86);
// binarySearchTree.insert(0);
// binarySearchTree.insert(107);
// binarySearchTree.insert(32);
// binarySearchTree.insert(56);
// binarySearchTree.insert(24);
// binarySearchTree.insert(4);
// binarySearchTree.insert(96);
// binarySearchTree.insert(73);
// console.log(binarySearchTree.find(13));
// console.log(binarySearchTree.find(86));
// console.log(binarySearchTree.breadthFirstSearch());
// console.log(binarySearchTree.depthFirstSearchPreOrder());
// console.log(binarySearchTree.depthFirstSearchPostOrder());
// console.log(binarySearchTree.depthFirstSearchInOrder());