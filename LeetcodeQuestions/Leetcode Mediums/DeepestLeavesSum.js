// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */





/*
 * @param {TreeNode} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    let q = [root],ans,qlen,curr
    while(q.length){
        qlen = q.length,ans =0
        for(let i=0;i<qlen;i++){
            curr = q.shift(),ans +=curr.val
            if(curr.left)q.push(curr.left)
            if(curr.right)q.push(curr.right)
        }
    }
    return ans;
};