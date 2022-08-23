// objects are reference types in javascript
//                                                           reference type
/*var object1 ={value:10};

var object2 = object1;//referencing object1

var object3 = {value:10} // creates a new adress

object1.value=15
console.log(object1);*/

//                                                          context vs scope
// const obj4={
//     a: function(){
//         console.log(this);
//     }
// }
//                                                          instantiation
//making multiple copies of an object

class Player { //capetalise the name player in class 
    constructor(name, type){
        console.log()
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am ${this.name}, i am a ${this.type}`)
    }
}
//wizard extends whatever player have add on top
class Wizard extends Player{
    //we have to use super whenever we use extend
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`wewwwww i am a ${this.type}`);
    }
}

const wizard1 = new Wizard('shelly', 'healer');
const wizard2 = new Wizard('shawn', 'darkMagic')