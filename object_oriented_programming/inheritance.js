class Car { //Car c is capatelised because it is the syntex 
    constructor(brand){
        this.carname = brand //this refers to the scope of Car
    }
    present(){                    //method returning the carname    
        return `i have a ${this.carname}`;
    }
}

//instances of class which adds on to the class of Car
//inheritance 
class Model extends Car {
    //brand here is the parent constructor parameter so we have to use super
    //mod is the addon
    constructor(brand, mod){
        super(brand);  //super refers to parent class which is Car
        this.model = mod;
    }
    show(){
        return this.present()+`,it is a ${this.model}`
    }
}
//creating a variable named myCar and displaying the results

let myCar = new Model("Ford","Mustang");
console.log(myCar.show())