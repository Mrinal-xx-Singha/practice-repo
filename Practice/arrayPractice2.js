class Array {
    constructor(){
    this.length = 0;
    this.data = {};
    }
    peek(index){
        return this.length[this.data]=index;
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.datap[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for(let i = index;i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.delete[this.length-1];
    }
}

const newArray = new Array();
newArray.push("Mrinal");
newArray.push("Coding");
newArray.push("challange");
newArray.pop();

console.log(newArray);