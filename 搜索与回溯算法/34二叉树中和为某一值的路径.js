/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
    let res = [];
    dfs(root, target, []);
    return res;

    function dfs(root, target, path) {
        if(!root)
            return;
        target -= root.val;
        path.push(root.val)
        const { left, right } = root;
        // 已找到路径最后一个结点且此结点为根结点
        if(target === 0 && !left && !right)
            // 在这里需push一个新的数组而不是path
            // 否则后续改变path会连带改变res内的path
            res.push(path.slice());
        // 递归左右子树
        dfs(left, target, path);
        dfs(right, target, path);
        // 删除path最后一个元素,回退到父结点
        path.pop();
    }
};
