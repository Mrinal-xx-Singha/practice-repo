// Unique Number of Occurrences

// Given an array of integers arr,

//  return true if the number of occurrences of each value in the array is unique,
//   or false otherwise.
// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences,
//  2 has 2 and 3 has 1. No two values have the same number of occurrences.



/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let myMap = new Map()
    for(let num of arr){
        if(myMap.has(num)){
            myMap.set(num,(myMap.get(num) +1))
        }else {
            myMap.set(num,1)
        }
    }
    let mySet = new Set()
    for(const val of myMap.values()){
        if(mySet.has(val)) return false
        mySet.add(val)
    }
    return true
};