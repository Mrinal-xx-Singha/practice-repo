

// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

 

// Example 1:


// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]




var diagonalSort = function(M) {
    let y = M.length, x = M[0].length - 1
	for (let i = 2 - y; i < x; i++) {              // Start far enough to the left to get
        let diag = new Array(y), k = 0             // all non-singleton diagonals
        for (let j = 0; j < y; j++)
            if (M[j][i+j]) diag[k++] = M[j][i+j]   // Only store valid cell values in the array
        diag.sort((a,b) => a - b), k = 0           // Sort the diagonal and reset its index
        for (let j = 0; j < y; j++)
            if (M[j][i+j]) M[j][i+j] = diag[k++]   // Replace the diagonal cells in sorted order
    }
    return M
};