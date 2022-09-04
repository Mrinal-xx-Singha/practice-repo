class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null
        };
        this.tail=this.head;
        this.length=1;
    }
    append(value){
        const newNode = {
            value:value,
            next:null
        }; 
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    prepend(value){
        const newNode = {
            value:value,
            next:null
        }
        newNode.next = this.head;
        this.head=newNode;
        return this
    }


}



const myLinkedList = new LinkedList();
myLinkedList.append(5);

console.log(myLinkedList);