// A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

// Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i].

// Return the maximum sum of like-time coefficient that the chef can obtain after dishes preparation.

// Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.

 

// Example 1:

// Input: satisfaction = [-1,-8,0,5,-9]
// Output: 14
// Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).
// Each dish is prepared in one unit of time.


/**
 * @param {number[]} satisfaction
 * @return {number}
 */
 var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => {return a-b})
    let result =0, len = satisfaction.length
    for(let i=0;i<len;i++){
        let current =0;
        for(let j =i;j<len;j++){
            current += (satisfaction[j] *(j-i+1))
        }
        if(current > result ) {result = current}
    }
    return result
};