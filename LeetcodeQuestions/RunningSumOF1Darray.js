// Running Sum of 1D Array



var runningSum = function(nums){
    let total = o;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        nums[i] = total;
    }
    return nums;
};
