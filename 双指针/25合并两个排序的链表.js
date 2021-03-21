/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let f = l1, s = l2, res = new ListNode(0);
    let cur = res;
    while(f && s){
        if(f.val <= s.val){
            cur.next = f;
            f = f.next;
        }else {
            cur.next = s;
            s = s.next;
        }
        cur = cur.next;
    }
    // 补足不为null的链
    cur.next = f != null ? f : s;
    return res.next;
};