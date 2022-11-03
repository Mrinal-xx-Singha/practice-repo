// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

 

// Example 1:


// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]


/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    let Ai = 0,Bi = 0;
    let res = []
while(Ai < firstList.length && Bi <secondList.length){
    let maxStart = Math.max(firstList[Ai][0],secondList[Bi][0]);
    let minEnd = Math.min(firstList[Ai][1],secondList[Bi][1]);
    
    if(maxStart <=minEnd) res.push([maxStart,minEnd])
    
    if(firstList[Ai][1] < secondList[Bi][1])Ai++;
    else Bi++
}
    return res;
};