// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

// Example 1:

// Input: n = 1
// Output: 5
// Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].

/*
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {
    let a = 1,e =1 , i=1,o=1,u=1;
    while(n -- > 1){
        a = a+e+i+o+u
        e = e+i+o+u
        i = i+o+u
        o = o+u
        u = u
    }
    return a+e+i+o+u
};