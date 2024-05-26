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
        this.length = 1;
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
        this.length += 1;
    }
    prepend(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
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
        if (index >= this.length) {
            return this.append(value);
        }
        if (index <= 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const currentNode = this.traverseToIndex(index - 1);
        const holdingPointer = currentNode.next;
        currentNode.next = newNode;
        newNode.next = holdingPointer;
        this.length += 1;
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
        this.length -= 1;

    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printLinkedList();
    }
    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }

    findNthNodeFromEnd(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;
        for (let i = 0; i < n; i++) {
            firstPointer = firstPointer.next;
        }
        while (firstPointer !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }
        return secondPointer.value;
    }
    // NthNodeFromEnd(n) {
    //     let pNthNode = this.head;
    //     let pTemp = this.head;
    //     for(let i = 0; i < n; i++ ){
    //         if(pTemp.next !== null) {
    //             pTemp = pTemp.next;
    //         }
    //     }

    //     while(pTemp) {
    //         pNthNode = pNthNode.next;
    //         pTemp = pTemp.next;
    //     }
    //     return pNthNode.value;
    // }

    /**
     In JavaScript, when you pass a primitive type (such as numbers, strings, or booleans) to a function as an argument, it is passed by value, not by reference.
     Passed by Value: When a primitive type is passed by value, a copy of the actual value is made and passed to the function.
     This copy exists independently of the original variable that was passed. Any changes made to this copy inside the function do not affect the original variable outside the function.

    Example: Consider the following code snippet:
    function increment(num) {
        num += 1;
        console.log(num); // Inside the function: num is incremented
    }

    let x = 5;
    increment(x);
    console.log(x); // Outside the function: x remains unchanged

    -> In this example, x is a primitive number passed to the increment function. Inside the function, num is a copy of the value of x. When num is incremented, it only affects the copy inside the function, not the original x variable outside the function.
    -> Implication for Recursion: When dealing with recursive functions,if a primitive type is used to keep track of state or count, changes made to it within the recursive calls will not persist across different levels of recursion because each recursive call operates on its own copy of the value.
    -> Object Reference**: Unlike primitive types, objects (including arrays and functions) are passed by reference in JavaScript. When you pass an object to a function, you're passing a reference to the same object in memory. Any changes made to the object inside the function will affect the original object outside the function because they both point to the same memory location.
    -> Understanding whether a type is passed by value or by reference is crucial when writing JavaScript code, especially in scenarios involving function calls, recursion, and maintaining state.
     */
    findNthNodeFromEndUsingResursion(n) {
        let count = { value: 0 };
        let result = this.findNthNodeFromEndUsingResursionHelper(this.head, n, count);
        return result;
    }
    findNthNodeFromEndUsingResursionHelper(node, n, count) {
        if (node === null) {
            return null;
        }

        let result = this.findNthNodeFromEndUsingResursionHelper(node.next, n, count);
        count.value += 1;

        if (count.value === n) {
            return node.value;
        }

        return result;
    }

}

let myLinkedList = new LinkedList(10)
myLinkedList.append(6);
myLinkedList.append(16);
myLinkedList.append(25);
myLinkedList.append(28);
myLinkedList.append(17);
myLinkedList.append(11);
myLinkedList.insert(1, 25);
console.log(myLinkedList.findMiddle());
console.log(myLinkedList.findNthNodeFromEndUsingResursion(5));
console.log(myLinkedList.printLinkedList())


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