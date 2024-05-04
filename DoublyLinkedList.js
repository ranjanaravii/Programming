//10 -> 6- > 12

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 6,
//             next: {
//                 value: 12,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.lenght = 1;
    }
    append(value) {
        const newNode = new Node(value);
        //assign the value of tail
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode
        this.lenght += 1;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.lenght += 1;
    }
    printLinkedList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter += 1;
        }
        return currentNode;
    }
    insert(index, value) {
        if (index >= this.lenght) {
            return this.append(value);
        }
        if (index <= 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const currentNode = this.traverseToIndex(index - 1);
        const follower = currentNode.next;
        currentNode.next = newNode;
        newNode.prev = currentNode;
        newNode.next = follower;
        follower.prev = newNode;
        this.lenght += 1;
    }
    remove(index) {
        const currentNode = this.traverseToIndex(index - 1);
        const unwantedNode = currentNode.next;
        currentNode.next = unwantedNode.next;
        this.lenght -= 1;

    }
}

let myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(6);
myLinkedList.append(16);
myLinkedList.insert(1, 25);
myLinkedList.insert(0, 9);
console.log(myLinkedList);
console.log(myLinkedList.printLinkedList())


/**
 * output
 * 
 * DoublyLinkedList {
  head: <ref *1> {
    value: 10,
    next: Node { value: 9, next: [Node], prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    value: 25,
    next: null,
    prev: Node { value: 16, next: [Circular *2], prev: [Node] }
  },
  lenght: 5
}
[ 10, 9, 6, 16, 25 ]
 */