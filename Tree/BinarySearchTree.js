class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

BinarySearchTree = class {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                //left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else {
                //right
                if (!currentNode.right) {
                    currentNode = currentNode.right;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(!currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }

}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
tree.insert(3);
tree.insert(12);
tree.insert(17);
console.log(JSON.stringify(tree));