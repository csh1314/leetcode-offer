/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// A,B走到第一个公共结点node, 后面为公共尾部
// 走到node时,A走a-c个结点,B走b-c个结点
// A遍历完headA时,再重新开始遍历headB
// 再次走到node时, 共计步 a+(b-c)
// B重新遍历headA走到node时,供计步 b+(a-c)
// 可见两者最终重合,若c>0,则两者指向第一个公共结点
// 若c=0,则两者皆指向null
// 时间复杂度 O(a+b) 空间复杂度O(1)
 var getIntersectionNode = function(headA, headB) {
    let A = headA, B = headB;
    while(A !== B){
        A = A !== null ? A.next : headB;
        B = B !== null ? B.next : headA;
    }
    return A;
};