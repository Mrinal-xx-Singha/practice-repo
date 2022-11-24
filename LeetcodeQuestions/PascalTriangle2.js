// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]

/*
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result =[];
    for(var i=0;i<=rowIndex;i++){
        result[i]=[];
    }
    for(i=0; i<=rowIndex;i++){
        result[i][0] = result[i][i] =1; 
    }
    for(i=2;i<=rowIndex;i++){
        for(let j=1;j<i;j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
        return result[rowIndex];
};