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
        // icrement it +1
        this.length++;
        // return this
        return this;
    }
    prepend(value) {
        // creatign a new node
        const newNode = {
            value: value,
            next: null
        };
        // new node .next = null is equal this.head(pointer)
        // this.next -> this.head
        newNode.next = this.head;
        //update this.head with new node
        this.head = newNode;
        //increase the length 
        this.length++;
        return this
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        //While loops are good if we dont know the length
        //of array or linked list
        while(currentNode !==null){
            //untill currentNode is not pointing to null push array to currentNNode.value
            array.push(currentNode.value);
            //update the current node and point t
            currentNode =currentNode.next;
        }
        return array;
    }
    // insert(index,value){

    // }
    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
// console.log(myLinkedList.printList());