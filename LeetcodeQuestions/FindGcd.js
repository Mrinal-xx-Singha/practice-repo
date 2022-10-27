// Given an integer array nums, return the greatest common divisor of the
//  smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer
//  that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
 const gcd = (a,b) => b === 0 ? a : gcd(b,a%b); 


 const findGCD = (nums)=> {
     let max = Math.max.apply(Math,nums);
     let min = Math.min.apply(Math,nums);
     return gcd(min,max)
     
 };