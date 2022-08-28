
class StackArray{
    constructor(){
       this.array =[];
    }
    //simply returning the top item
    peek(){
        return this.array[this.array.length-1];
    }
    //builtin push command
    push(value){
        this.array.push(value);
    }
    //builtin pop command
    //popping the top item in the stack
    pop(){
        this.array.pop();
        return this;
    }


}
const newStack = new StackArray();
newStack.push("google");
newStack.push("discord");
// newStack.pop();
console.log(newStack);
