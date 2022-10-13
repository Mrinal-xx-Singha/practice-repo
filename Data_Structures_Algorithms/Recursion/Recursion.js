//                  Find Factorial

// Time Complexity - O(n)
// Space Complexity - O(1)
function factorial(number){
    if(number == 2 ){
        return 2;
    }
    // decrement 
    return number * factorial(number-1);
};
console.log(factorial(5));


