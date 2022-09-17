// Popular Question

var twoSum = function(nums, target){
    const hash = [];


    for(let i=0;i<nums.length;i++){
        let val = nums[i];
        hash[val] = i;

    }
    for(let i=0;i<nums.length;i++){
        let pKey = target - nums[i];

        if(hash[pKey] && hash[pKey] !== i){
            return [i,hash[pKey]];
        }
    }
};

