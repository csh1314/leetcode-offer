/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let cur = head;
    if(cur.val === val)
        return head.next;
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next;
            break;
        }
        cur = cur.next;
    }
    return head;
};

// 双指针
var deleteNode = function(head, val) {
    if(head.val === val)
        return head.next;
    let pre = head, cur = head.next;
    // 遍历到 cur.val === val 时结束
    while(cur !== null && cur.val !== val){
        pre = cur;
        cur = cur.next;
    }
    // 让pre.next 指向 cur.next, 即是删除cur
    if(cur !== null)
        pre.next = cur.next;
    return head;
};