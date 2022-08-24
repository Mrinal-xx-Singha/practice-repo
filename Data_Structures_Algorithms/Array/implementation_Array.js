//implementaion of array

//building our own array
class MyArray {   //created a class named MyArray
    constructor(){  // default constructor syntex
        this.length = 0   //setting length to be zero 
        this.data = {};   //and data to be empty {}
 
    }
    //get method 
    get(index){  //accepting a parameter index 
        return this.data[index];    //returning this.data[index]
    }
    //push method
    push(item){   //accepting a parameter item
        //this.data[]
        //adding this.data to this
        this.data[this.length] = item;   //this.data[this.length] = item
        this.length ++  //imcrementing 
        return this.length;   // returning the length of array 
    }
    //Pop method which dont accept any parameter
    pop() {
        // making a variable named lastItem which adds this.data with this.length -1
        const lastItem = this.data[this.length-1];
        //deleting the last item in the this.length
        delete this.data[this.length-1];
        this.length--; //decrementing each time we call pop method
        return lastItem;
    }
    //deleting any item from the array 
    //delete method
    delete(index) {
        //made a variable named item and referencing
        //this.data and adding index to this.data
        const item = this.data[index];
        //shiftItems is a method
        this.shitftItems(index);
    }
    //shiftItems is a method which acceps a parameter named index
    shitftItems(index){
        //we have to loop over index and delete this.data which adds this.length -1
        for(let i =index; i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
    }
}

//creating a new object named newArray
const newArray = new MyArray();

newArray.push('Mrinal');
newArray.push('you');
newArray.push('!');
// newArray.pop();
newArray.delete(2);
console.log(newArray);