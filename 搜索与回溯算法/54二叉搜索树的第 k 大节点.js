/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// BST 二叉搜索树
// 求第n大的结点值
 var kthLargest = function(root, k) {
    let helper = [];
    dfs(root);
    return helper[k-1];
    
    // 右中左遍历,反中序遍历,得到从大到小的数组
    function dfs(root){
        if(!root || helper.length === k)
            return;
        dfs(root.right);
        helper.push(root.val);
        dfs(root.left);
    }
};