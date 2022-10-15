 // Merge Two Binary Trees
// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.
// -------------------------------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// -------------------------------------------------------------
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    function dfs(r,t){
        if(!r  && !t) return null;
        if(!r) return t;
        if(!t) return r;
        r.val += t.val;
        r.left = dfs(r.left,t.left)
        r.right = dfs(r.right,t.right)
        return r;
    }
    
    return dfs(root1,root2)
};