// ---------------------------------------OPTIMAL------------------------------------
// /**
//  * @param {number[][]} image
//  * @return {number[][]}
//  */
//  var flipAndInvertImage = function(image) {
//     let flipped = flip(image);
//     return invert(flipped)
// };
// // made a flip method
// flip =(matrix) => {
//     for(let i=0;i<matrix.length;i++){
//         let flipped =[];
//         for(let j=matrix[i].length-1;j >= 0;j--){
//             flipped.push(matrix[i][j])
//         }
//         matrix[i] = flipped;
//     }
//     return matrix;
// }
// // Made an invert method
// invert = (matrix) => {
//     for (let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if(matrix[i][j] === 0){
//                 matrix[i].splice(j,1,1)
//             }
//             else if(matrix[i][j] === 1){
//                 matrix[i].splice(j,1,0)
//             }
//         }
//     }
//     return matrix;
// }
// ----------------------MY SOLUTION--------------------