// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer

// ---------------------------
/*
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    return words.filter(n=> words.some(h => h !==n && h.includes(n)))
};