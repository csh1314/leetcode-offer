/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 思路：另起链表进行头插从而实现反转链表
var reverseList = function(head) {
    if(head === null || head.next === null)
        return head;
    let cur = head;
    let next = null;
    let emptyHead = new ListNode(0);
    while(cur !== null){
        next = cur.next;
        cur.next = emptyHead.next;
        emptyHead.next = cur;
        cur = next;
       
    }
    head = emptyHead.next;
    return head;
};