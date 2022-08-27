//Stack Data Structure 
//Made a class of node which accepts a value
class Node {

    constructor(value){
        //and made next = null
        this.value = value;
        this.next = null;
    }
}
//created a class named stack
class Stack {

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){

        return this.top;
    }
    push(value){
        //inheritance OOP
        const newNode = new Node(value);
        //check if the length is zero
        if(this.length===0){
            //update top with newNode
            this.top = newNode;
            //and also update bottom with newNode
            this.bottom = newNode;
            //else shift the pointer to newNode

        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom=null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
}
const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();

console.log(myStack);

