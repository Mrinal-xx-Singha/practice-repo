//Ques should be implemented with
//linked list
//arrays have indexes to shift we have to loop

//linked list is 0(1) have head and tail so it is prefered

class Node {
    //made a class of node
    constructor (value){
        //value and next pointing to null
        this.value = value;
        this.next = null;
    }
}
//created a class of queue
class  Queue {
    //first and last = null and length is zero 
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    //simply return the first element of the queue
    peek(){
        return this.first;
    }
    //add elements to the queue
    enqueue(value){
        const newNode = new Node(value)
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;

        }else {
            this.last.next = newNode;
            this.last = newNode; 
        }
        this.length++;
        return this;
    }
    dequeue(){
        //if first item is not null
        //return null
        if (!this.first){
            return null;
        }
        //if first name equals to last name 
        //make last name null
        if(this.first === this.last){
            this.last = null;
        }
        //decrement
        this.first = this.first.next;
        this.length --;
        return this;
    }
}
const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("sameer");
myQueue.enqueue("Troy");
myQueue.peek();
myQueue.dequeue();
console.log(myQueue);