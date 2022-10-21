// Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = words.length;
    
    for(var i = 0 ; i < words.length ; i++){
        let flag = false;
        for(var j = 0 ; j < words[i].length ; j++){
            if(!allowed.includes(words[i].charAt(j))){
                flag = true;
                break;
            }
        }
        if(flag) count--;
    }
    
    return count;
};