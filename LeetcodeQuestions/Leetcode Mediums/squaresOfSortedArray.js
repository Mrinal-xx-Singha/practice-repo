// Squares of a Sorted Array


// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

 
// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// ---------------------

// Time - O(n)
// Space - o(n)
// Two Pointer Approach 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // Auxilary new array of length of  nums 
    let result = new Array(nums.length).fill(0);
    // two pointers right and left
    let leftPtr = 0;
    // right is at the last
    let rightPtr = nums.length-1;
    // index of new auxilary array
    let resultIdx = nums.length-1;
    
    // square root of the number and comparison 
    while(leftPtr <= rightPtr) {
        let leftVal = Math.pow(nums[leftPtr],2);
        let rightVal = Math.pow(nums[rightPtr],2)
    // if left value is less than right value 
    if(leftVal < rightVal ){
        result[resultIdx] = rightVal;
        // decrement the right pointer
        rightPtr --
    }else {
        // result result index is equal to  left value  
        result[resultIdx] = leftVal;
        // increment the left pointer 
        leftPtr ++;
        //  the index of result  is decremented 
    }
    resultIdx--;
    
}
//  return the resutl auxilary array 
return result;
    
    
};