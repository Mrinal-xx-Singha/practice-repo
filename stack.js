//First in Last out

class Stack {
    constructor(){
        this.items = [];
    }
    push(items){
        this.items.push(items);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        if(this.items.length ==0){
            return null;
        }
        return this.items[this.items.length - 1]
    }
    getSize(){
        return this.items.length;
    }
    isEmpty(){
        return this.getSize() === 0;
    }
}

const cars = new Stack();

cars.push("Honda");
cars.push("Toyota");
cars.push("Mazda");
cars.push("Tesla");

console.log(cars.pop());
console.log(cars);







