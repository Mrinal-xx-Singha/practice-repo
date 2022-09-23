class Node {
    constructor(value){
        this.value=value;
        this.next=null
    }
}


class Stack {
    constructor(){
        this.array=[]
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(){
        this.array.push(value);
        return this;
    }
}
const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("discord");