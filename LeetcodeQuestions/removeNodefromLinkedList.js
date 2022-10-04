/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    //     since we know input node is not last node, sonextNode will not be null
        let nextNode = node.next;
        // step2
        node.val = nextNode.val;
        // step3
        node.next = nextNode.next;
        nextNode.next = null;
        delete(nextNode);
    };