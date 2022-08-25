## Function to reverse a string

function reverse (str) {
    //check if there is no string or strings length is less than 2
    //and typeof which is used to check what type of datatype is declared
    //if string is not there then return hmmmmm this is not good
    if(!str || str.length <2 || typeof str !== 'string'){
        return "hmm that is not good";
    }
    //made and empty array
    const backwards =[];
    //made a variable named totalItems and traversing 
    //to its length - 1;
    const totalItems = str.length -1;
    //looping through the input
    //applying the push method to push items in the 
    //empty array
    for(let i=totalItems;i>=0;i--){
        backwards.push(str[i]);
    }
    console.log(backwards)
    //joins all the item in the array
    return backwards.join('');
    console.log(backwards.join(''))
}

reverse("Hi my name is Mrinal")
