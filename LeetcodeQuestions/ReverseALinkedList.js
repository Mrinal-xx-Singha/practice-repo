/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // current pointer pointing to head
    let curr = head;
    // previous to null
    let prev = null;
    // next  to the next pointer 
    let next;
    //   while the current meaning the head is not null
    // keep looping over  
    while(curr !==null ){
        // make the next variable the head 
        next=curr.next;
        // make the head null
        curr.next=prev;
        // make the null the previous 
        prev=curr;
        // make current the previous
        curr = next;
        
    }
    // return the previous which is the reversed linked list
    return prev;
};