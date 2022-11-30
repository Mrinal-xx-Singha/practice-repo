// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

 

// Example 1:

// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
/*
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    if(!s.includes('b')) return true
    let firstB = s.indexOf('b');
    
    for(let i=firstB;i<s.length;i++){
        if(s[i]==='a') return false
    }
    return true
};