//Stack Data Structure using linked List
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
        //simply returning the top value
        //  the top value of the stack will be re
        return this.top;
    }

    push(value){
        //crated a new Node (instanciate OOP)
        const newNode = new Node(value);
        //check if the length is zero
        if(this.length===0){
            //update top with newNode
            this.top = newNode;
            //and also update bottom with newNode
            this.bottom = newNode;
            //else shift the pointer to newNode
        }else{
            //replace the top with new node
            const holdingPointer = this.top;
            this.top = newNode;
            //newNode will point the null
            this.top.next = holdingPointer;
        }
        //increment with 1
        this.length++;
        //returning the  list 
        return this;
    }
    pop(){
        //if top doesn't exist return null
        if(!this.top){
            return null;
        }
        //if top equals to bottom there is only one 1 item
        //if both of them, are qual
        //then this.bottom = null;
        if(this.top === this.bottom){
            this.bottom=null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        //decrease the length -1
        this.length--;
        return holdingPointer;
    }
}
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop()
myStack.peek();
myStack.pop();
myStack.pop();

console.log(myStack);

