// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

 

// Example 1:

// Input: num = "1210"
// Output: true
// Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
// The condition holds true for every index in "1210", so return true.


/*
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    // Fill method 
    // made an array of size of length and filled it with zero
    const arr = Array(num.length).fill(0)
    //  for of loop
    for(const char of num) {
        arr [Number(char)] ++;

    }
    // return arr
    return arr.join('') === num;
};