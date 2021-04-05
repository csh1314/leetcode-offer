/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    // 手写bfs,用'X'表示null
    const queue = [root], ret = []
    while(queue.length){
        const node = queue.shift()
        if(node){
            ret.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        }else
            ret.push('X')
    }
    return ret.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data == 'X')
        return null
    const t = data.split(',')
    const root = new TreeNode(t[0])
    const queue = [root]
    let idx = 1
    while(idx < t.length){
        const node = queue.shift()
        const leftVal = t[idx++]
        const rightVal = t[idx++]
        if(leftVal !== 'X'){
            const left = new TreeNode(leftVal)
            node.left = left
            queue.push(left)
        }
        if(rightVal !== 'X'){
            const right = new TreeNode(rightVal)
            node.right = right
            queue.push(right)
        }            
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */