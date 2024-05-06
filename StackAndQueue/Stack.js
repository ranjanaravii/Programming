class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//using LinkedList implementation
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length += 1;
        return this;
    }
    pop(){
        if(!this.top) {
            return null;
        }
        if(this.length === 0) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length -= 1;
        return holdingPointer;

    }
}

//using array

class StackUsingArray{
    constructor(){
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

const myArrayStack = new StackUsingArray();
myArrayStack.push('google')
myArrayStack.push('chatGpt')
myArrayStack.push('Gemini')
console.log(myArrayStack)
console.log(myArrayStack.peek())



// const myStack = new Stack();
// myStack.push('google')
// myStack.push('chatGpt')
// myStack.push('Gemini')
// console.log(myStack.peek());
// console.log(myStack.pop());