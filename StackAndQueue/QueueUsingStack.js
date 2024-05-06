class QueueUsingStack {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(value) {

        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(value);

        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop())
        }
    }

    dequeue() {
        return this.s1.pop();
    }

    peek() {
        return this.s1[this.s1.length - 1];
    }

    isEmpty() {
        return this.s1.length === 0;
    }
}


const myQueue = new QueueUsingStack();
myQueue.enqueue('Ravi');
myQueue.enqueue('Rohit');
myQueue.enqueue('Deva');
myQueue.enqueue('Ashish');
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue);
console.log(myQueue.isEmpty());