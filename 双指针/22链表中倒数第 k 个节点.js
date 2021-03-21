/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let cur = head, i = 0, res = head;
    while(cur){
        i++;
        cur = cur.next;
    }
    for(let j = i-k; j > 0; j--){
        res = res.next;
    }
    return res;
};