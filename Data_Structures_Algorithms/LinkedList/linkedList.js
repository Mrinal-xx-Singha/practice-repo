// created a Class LinkedList
class LinkedList {
    // Constructor accepting a value
    constructor(value){
        // pointing to the head which is the value
        //we give 
        //this points to linked list class
        this.head= {
            //Head have  value and next 
        value: value,
        next: null
        }
        //tail is pointing at the head as there is only one item
        
        this.tail = this.head;
        this.length = 1;
    }
    //append method
    append(value) {
        //created a new node named newNode with value
        //next -> null 
        const newNode={
            value:value,
            next: null
        };
        //updating the this.tail to next(in append())
        //and pointing it to newNode
        this.tail.next = newNode;
        //now this.tail is the new node made (newNode)
        this.tail=newNode;
        // increment it +1
        this.length++;
        // return this
        return this;
    }
    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(10);
console.log(myLinkedList);
