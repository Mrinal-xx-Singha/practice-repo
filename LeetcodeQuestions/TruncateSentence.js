// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
//  Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", 
// and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​.
//  You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 

// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === ' '&& ++count === k) return s.slice(0,i);
    }
    return s;
};