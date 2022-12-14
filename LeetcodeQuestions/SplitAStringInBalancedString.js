// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL",
//  each substring contains same number of 'L' and 'R'.


/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let count = 0,balance =0;
    for(let i=0;i<s.length;i++){
        if(s[i] === 'R'){
            balance ++
        }else {
            balance --;
        }
        if(balance === 0){
            count++
        }
    }
    return count;
};