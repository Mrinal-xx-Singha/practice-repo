/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    // const newArr = nums.map((item,index)=>nums[nums[index]]);
    // return newArr;
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        arr.push(nums[nums[i]])
    }
    return arr;
};