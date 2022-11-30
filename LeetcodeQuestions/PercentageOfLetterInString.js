// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

 

// Example 1:

// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.


/*
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
    return Math.floor((s.length-s.replaceAll(letter,'').length ) *100 / s.length)
 };