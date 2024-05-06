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
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length += 1;
        return this;
    }

    dequeue() {
        if (!this.first) return null;
        // holdingPointer = this.first;
        this.first = this.first.next;
        this.length -= 1;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Ravi');
myQueue.enqueue('Rohit');
myQueue.enqueue('Deva');
myQueue.enqueue('Ashish');
myQueue.dequeue()
console.log(myQueue);