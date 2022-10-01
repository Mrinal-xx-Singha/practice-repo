// Running Sum of 1D Array



var runningSum = function(nums){
    let total = nums[0];
    for(let i=1;i<nums.length;i++){
        sum += nums[i];
        nums[i] = total;
    }
    return nums;
};
