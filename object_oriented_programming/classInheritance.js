//to create a class inheritance ,use the extends keyword.

//A class created with class inheritance inherits all the methods from another class

class Car {
    //constructor accepts a 
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return 'i have a ' + this.carName;
    }
}

class Model extends Car {
    constructor(brand,mod){
        //refers to parent class
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present()+" it is a "+ this.model;
    }
}
let myCar = new Model("Ford","Mustang");
console.log(myCar.show());
console.log(myCar);




// in Javascript you must declare a class before using it 

