// You have n boxes. You are given a binary string boxes of length n,
//  where boxes[i] is '0' if the ith box is empty,
//   and '1' if it contains one ball.

// In one operation,
//  you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1.
//   Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, 
// where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

 

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations,
//  and move one ball from the second box to the third box in one operation.








function minOperations(boxes) {
    const result = Array(boxes.length).fill(0);
    
    // First we make one pass through the array (left to right).
    // For each index, we calculate the moves needed to get every
    // non-empty box on the left of the current index to the current index.
    
    // At each i in boxes:
    //   - add the running sum to result[i]
    //   - increment the notEmpty box count if the current box is '1'
    //   - add the previously seen notEmpty boxes (including current index) to the runningSum
    
    let notEmpty = 0;
    let runningSum = 0;
    
    for (let i = 0; i < boxes.length; ++i) {
      result[i] += runningSum;
      if (boxes[i] === '1') ++notEmpty;
      runningSum += notEmpty;
    }
    
    // Make one more pass through the array (right to left).
    // The operations are identical to the first loop, except that
    // this pass calculates the moves needed to get every non-empty box
    // on the right of each index to the current index.
    
    notEmpty = 0;
    runningSum = 0;
    
    for (let i = boxes.length - 1; i >= 0; --i) {
      result[i] += runningSum;
      if (boxes[i] === '1') ++notEmpty;
      runningSum += notEmpty;
    }
    
    return result;
  }