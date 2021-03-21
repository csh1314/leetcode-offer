/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(head === null) return null;
    let cur = head;
    const map = new Map();
    // 复制节点到map
    while(cur !== null){
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    // 遍历构建map中各节点的next和random指向
    while(cur !== null){
        map.get(cur).next = map.get(cur.next) || null;
        map.get(cur).random = map.get(cur.random) || null;
        cur = cur.next;
    }
    return map.get(head);
};
