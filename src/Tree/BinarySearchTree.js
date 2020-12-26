// Binary Search Tree (BST)

// Type	tree
// Invented	1960
// Invented by	P.F. Windley, A.D. Booth, A.J.T. Colin, and T.N. Hibbard
// Time complexity in big O notation

// Algorithm Average	Worst case
// Space     O(n)       O(n)
// Search    O(log n)   O(n)
// Insert    O(log n)   O(n)
// Delete    O(log n)   O(n)

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }
    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            console.log(`FIND : ${data}`)
            if (data < current.data) {
                console.log(`${data} < ${current.data}`)
                current = current.left;
            } else {
                console.log(`${data} > ${current.data}`)
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
}

const bst = new BST();

bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(5);
bst.insert(2);
bst.insert(7);

bst.getMin();
bst.getMax();

bst.find(4);
