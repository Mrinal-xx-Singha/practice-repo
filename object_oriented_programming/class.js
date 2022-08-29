class Car {
    constructor(name,year){
        //initial properties

        this.name=name;
        this.year=year;
    }
    age(){
        //method named age
        let date = new Date();
        return date.getFullYear()- this.year;
    }
}
let mycar1 = new Car("Ford",2000);
let mycar2 = new Car("Audi",2019);
console.log(mycar1);
console.log(mycar2);
console.log("My car is "+ mycar1.age()+"Years Old");