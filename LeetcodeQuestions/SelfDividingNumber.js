// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]



/*
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    const result =[];
//     Loop Through all numbers
    for(let number = left;number <=right;number++){
        let digits = number;
        let valid = true;
        
        
// Loop through all number digits
        while(digits > 1){
            let lastDigit = digits % 10;
//             check if zero or not self dividing
            if(!lastDigit || number % lastDigit !== 0){
                valid = false;
                break
            }
//             Remove last Digit from the number
            digits = Math.floor(digits/10)
        }
        if(valid){  
            result.push(number);
        }
    }
    return result;
};