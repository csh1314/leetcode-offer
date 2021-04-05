/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root)
        return []
    const queue = [root], res = []
    let isOdd = true, size
    // 每一层的节点数是知道的 size
    while(queue.length){
        size = queue.length
        let temp = new Array(size)
        while(size--){
            let node = queue.shift()
            temp[isOdd ? temp.length - size - 1: size] = node.val
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
        res.push(temp)
        isOdd = !isOdd
    }
    return res
};