class Array {
    constructor(){
        this.value= {};
        this.length=0;
    };
    push(item){
        this.value[this.length]=item;
        this.length++;
    }
    pop(){
        const lastitem=this.value[this.length-1];
        delete this.value[this.length-1];
        this.length--;
        return lastitem;
    }
    peek(index){
        return this.value[index];
    }
}
const newArray = new Array();
newArray.push("Mrinal");
newArray.push("Singha");
newArray.push("Learning array");
// newArray.pop();
newArray.peek(1);
console.log(newArray);
