// Given an array of strings nums containing n
//  unique binary strings each of length n, 
//  return a binary string of length n that does not appear in nums. 
//  If there are multiple answers, you may return any of them.

 

// Example 1:

// Input: nums = ["01","10"]
// Output: "11"
// Explanation: "11" does not appear in nums. "00" would also be correct.
/**
 * @param {string[]} nums
 * @return {string}
 */
 var findDifferentBinaryString = function(nums) {
    let result = ''
    for(let i=0;i< nums.length;i=i+1){
        if(nums[i][i] === '0') {
            result += "1"
        }
        else {
            result += '0';
        }
    }
    return result;
    
};