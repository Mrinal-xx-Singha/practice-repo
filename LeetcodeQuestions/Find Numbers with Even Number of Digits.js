// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Given an array nums of integers, return how many of them contain an even number of digits.

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const isEven = num => {
        return String(num).length % 2 ===0;
    };
    return nums.filter(elem => isEven(elem)).length;
};