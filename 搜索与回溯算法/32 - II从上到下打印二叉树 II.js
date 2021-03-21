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
 // bfs 一般必用队列的先进先出的特性 
 var levelOrder = function(root) {
    if(!root)
        return [];
    let queue = [root], res = [];
    while(queue.length){
        let temp =[];
        // for循环作用: 
        // 遍历并出队当前层的所有结点
        // 并push下一层的所有结点
        for(let i = queue.length; i >0; i--){
            let node = queue.shift();
            temp.push(node.val);
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right)
        }
        res.push(temp);
    }
    return res;
};




