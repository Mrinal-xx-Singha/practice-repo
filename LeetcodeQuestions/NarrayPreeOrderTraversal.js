// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example1
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]



/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    const res = [] , stack = [root];
    while( stack.length){
        const curr = stack.pop();
        if(!curr) continue
        res.push(curr.val);
        stack.push(...curr.children)
    }
    return res.reverse()
};