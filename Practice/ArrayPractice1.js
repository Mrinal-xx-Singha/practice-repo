//Implementing an array
class Array {
    constructor(){
    this.value = {};
    this.length = 0;
    }
    look(index){
        return this.value[index];
    }
    push(item){
        this.value[this.length]= item;
        this.length++;
    }
    pop(){
        const lastItem = this.value[this.length-1];
        delete this.value[this.length-1];
        this.length--;
        return lastItem;
    }
}

const newArray = new Array();
newArray.push("Mrinal");
newArray.push("Singha");
newArray.push("Ferrari");
newArray.look();
console.log(newArray);


