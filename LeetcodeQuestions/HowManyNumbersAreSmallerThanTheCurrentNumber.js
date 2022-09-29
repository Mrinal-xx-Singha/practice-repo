// sort array from the biggest to the smallest
// [8,1,2,2,3] --> [8,3,2,2,1]

// now we just locate the number we want using lastIndexOf()
// to avoid the duplicate values

// the amount of numbers that come after that number is the answer

// EX:
// num8 has 4nums after it (3,2,2,1) so the answer is 4
// num3 has 3nums after it (2,2,1) so the answer is 3
// num2 here we gonna find the second value of 2 cuz we are using lastIndexOf()
// so the numbers that come after it is just 1 so the answer is 1

var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a,b) => b-a),
          numsIndexLength = nums.length - 1;
    
    return nums.map(val => numsIndexLength - sortedNums.lastIndexOf(val));
};