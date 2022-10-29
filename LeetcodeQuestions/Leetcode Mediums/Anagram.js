// You are given two strings of the same length s and t.
//  In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var minSteps = function(s, t) {
    let Map = {};
    for(let letter of s){
        if(Map[letter]) Map[letter]++;
        else Map[letter] = 1;
    }
    let changes = 0;
    for(let letter of t){
        if(Map[letter])Map[letter]--;
        else changes++;
    }
    return changes;
};