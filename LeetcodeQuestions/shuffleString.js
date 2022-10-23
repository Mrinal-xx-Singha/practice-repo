// ou are given a string s and an integer array indices of the same length. 
// The string s will be shuffled such that the character at the ith position moves to indices[i]
//  in the shuffled string.

// Return the shuffled string.

 

// Example 1:


// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.




/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    //     made an empty new array
      const target = new Array(s.length);
    //     iteratted through s.length
        for(let i=0;i<s.length;i++){
    //         target ar indices of i is =s[i];
            target[indices[i]]=s[i];
        }
    //     join it to make it a string 
        return target.join('');
    };