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
 var pairSum = function(head) {
    let ans = [];
    while(head !=null){
        ans.push(head.val);
        head = head.next;
    }
    let max =0;
    for(let i=0;i<ans.length;i++){
        max = Math.max(max, (ans[i] +ans[ans.length-1-i]));
        console.log(max)
    }
    return max;
};