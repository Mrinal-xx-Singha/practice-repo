// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.


/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    let ans = new Set();
    
    
    let set1 = new Set();
    for(let n of nums1){
        set1.add(n);
    }
    let set2 = new Set();
    for(let n of nums2){
        set2.add(n);
        if(set1.has(n)){
            ans.add(n)
        }
    }
    for(let n of nums3)
        if(set1.has(n) || set2.has(n)){
            ans.add(n)
        }
    return[...ans]
};