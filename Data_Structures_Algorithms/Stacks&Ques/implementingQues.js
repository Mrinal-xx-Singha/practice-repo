class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Ques {
    constructor(){
        this.first = null;
        this.last = null;
        this.length =0;
    }
    peek(){
        return this.first;
    }
    enque(value){
        const newNode = new Node(value)
        if(this.length===0){
            this.first = newNode;
            this.last = newNode;    
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this.this;
    }
    deque(){
        
    }
    
}
const myQueue = new Ques();
myQueue.enque("joy");
myQueue.enque("Sameer");
myQueue.enque("Mrinal")
console.log(myQueue);