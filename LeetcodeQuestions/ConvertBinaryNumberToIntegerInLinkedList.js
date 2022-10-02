/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// -------------------------------------------------------------

var getDecimalValue = function(head){
    let currentNode = head;
    let total = 0;
    while(currentNode){
        total = total *2 + currentNode.val;
        currentNode = currentNode.next;
    }
    return total;
};