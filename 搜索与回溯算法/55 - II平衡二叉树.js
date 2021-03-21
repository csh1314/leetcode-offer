/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 双dfs
// 判断当前结点是否平衡
 var isBalanced = function(root) {
    if(!root)
        return true;
    let gap = maxDepth(root.left) - maxDepth(root.right);
    return (gap>=-1 && gap<=1) && isBalanced(root.left) && isBalanced(root.right); 
};
// 得到当前结点子树深度
function maxDepth(root){
    if(!root)
        return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}