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
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.lenght = 1;
    }
    append(value) {
        //create a new node to insert the value 
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        //assign the value of tail
        this.tail.next = newNode;
        this.tail = newNode
        this.lenght += 1;
    }
    prepend(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        newNode.next = this.head;
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
        while(counter != index) {
            currentNode = currentNode.next;
            counter += 1;
        }
        return currentNode;
    }
    insert(index, value) {
        if(index >= this.lenght) {
            return this.append(value);
        }
        if(index <= 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const currentNode = this.traverseToIndex(index - 1);
        const holdingPointer = currentNode.next;
        currentNode.next = newNode;
        newNode.next = holdingPointer;
        this.lenght += 1;
        // for(let i = 0; i <= index - 1; i++) {
        //     if(i === index-1) {
        //         const nextNode = currentNode.next;
        //         currentNode.next = newNode;
        //         newNode.next = nextNode;
        //         this.lenght += 1
        //     }
        //     currentNode = currentNode.next;
        // }
    }
    remove(index) {
        const currentNode = this.traverseToIndex(index - 1);
        const unwantedNode = currentNode.next;
        currentNode.next = unwantedNode.next;
        this.lenght -= 1;

    }
    reverse() {
        if(!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printLinkedList();
    }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(6);
myLinkedList.append(16);
myLinkedList.insert(1, 25);
myLinkedList.insert(0, 9);
console.log(myLinkedList);
console.log(myLinkedList.printLinkedList())
console.log(myLinkedList.reverse())


/**
 * output
 * 
 * LinkedList {
  head: Node { value: 9, next: { value: 10, next: [Node] } },
  tail: Node { value: 16, next: null },
  lenght: 5
}
[ 9, 10, 25, 6, 16 ]

 */