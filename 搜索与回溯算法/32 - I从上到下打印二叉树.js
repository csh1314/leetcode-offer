/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// BFS 通常借用队列来实现
// 此题遍历即可
var levelOrder = function(root) {
    if(!root)
        return [];
    let queue = [root], res = [];
    while(queue.length){
        let node = queue.shift();
        res.push(node.val);
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right)
    }
    return res;
};

