
// //class declaration class keywoed classname=myclass
// class myclass   {
//     //constructor with parameter name ,model,and year
//     constructor(name,model,year){
//         //this keyword is used to define the class myclass pointing to it

//     this.name= name ;

//     this.model=model;
//     this.year=year;

//     }
// };


//class creation using the class keyword
// Car is used as class name
//constructor is added because it is a must
// with two parameters name and year
class Car {
    constructor(name, year){
        //this keyword is used to define the name object inside class Car
        //this.year signifies the year object parameter 
        this.name = name;
        this.year = year;
    }
    //age function is declared with a parameter x
    //function returning x with -this.year
    age(x){
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

//class methods are created with the same syntex as object methods.
// always add a constructor() method.
//then add any number of methods.

//declaring a variable named myCar1 using the new keyword to make a new object 
//specifying the parameters name = ford , mdoel =22 , year = 2022

let myCar1 = new Car("Ford",2000)
//document keyword is used to invoke the window object using the method getElementById to caall id demo from index.html
//.innerHTML is used to modify the window html  having the id of demo  and displaying it in the screen
document.getElementById("demo").innerHTML="My car is "+myCar1.age(year)+"years old.";















