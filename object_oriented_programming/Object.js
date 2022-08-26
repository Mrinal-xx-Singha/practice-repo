
//Object of User
let user ={
    //properties
    age:54,
    name:"Mrinal",
    magic: true,
    //we can store a function inside an object     
    scream: function(){
        //console logging the function 
        console.log("ahhhhhhhhhhh!");
    }
}


console.log(user)
//accessing the properties of object
//user is the object name
// name
console.log(user.name);
//age
console.log(user.age);
//spells
console.log(user.spells);
user.scream();
