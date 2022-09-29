/**
 * Keys:
 *  - Notice that any value x is: 1 <= x <= n and the indices of the array
 * are from 0 to n - 1. We're not allowed to use extra space (except the result)
 * so in this case we can use the array as its own hash table.
 *  - Traverse the array, at any given number, go to the index = number - 1
 * and flip that value to negative. number - 1 because number can be n and end
 * index is n - 1 => we don't want to go out of bound. The same for index 0.
 * Time = O(n) where n is the length of the input array because we only
 * traverse it one time and all other operations take constant time.
 * Space = O(1) NOTE: if we don't count the returned result. In fact, 
 * space = O(n) because we might have to store at most O(n/2) elements => remove
 * constant = O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const duplicates = []; 

    for (const currentNum of nums) {
        // Get the index that currentNum points to:
        // Note: we have to use Math.abs because the currentNum 
        // could have been flipped:
        const otherIndex = Math.abs(currentNum) - 1;

        // If the number at otherIndex > 0 (hasn't been flipped):
        if (nums[otherIndex] > 0) {
            // Flip it to negative to mark that we've visited it:
            nums[otherIndex] = nums[otherIndex] * (-1);
        }
        // If the number at otherIndex < 0 (has been flipped):
        else {
            // We know that we've visited this currentNum before because
            // it leads us to the same number.
            duplicates.push(Math.abs(currentNum));
        }
    }
    return duplicates;
};
// NOTE: We don't use "extra" space to solve the question, but in reality, we use extra space to store the result, so the actual space complexity is O(n). It's good to let the interviewer know that since we might have to return up to n elements in the result, the space complexity is O(n). Then, the interview would very likely tell you to ignore that space.