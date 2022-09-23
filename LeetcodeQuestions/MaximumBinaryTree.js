const constructMaximumBinaryTree = (nums) => {
    if(nums.length == 0) return new TreeNode(null)
    let max = Math.max(...nums)
    let index = nums.indexOf(max)
    
    let root = new TreeNode(max)
    let left_arr = nums.slice(0, index)
    let right_arr = nums.slice(index + 1)
    
    if(left_arr.length > 0) 
        root.left = constructMaximumBinaryTree(left_arr)
    if(right_arr.length > 0) 
        root.right = constructMaximumBinaryTree(right_arr)

    return root
};