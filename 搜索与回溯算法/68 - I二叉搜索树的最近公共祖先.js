/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// root为BST二叉搜索树
 var lowestCommonAncestor = function(root, p, q) {
    //  p、q在右子树
    if(root.val < p.val && root.val < q.val)
        return lowestCommonAncestor(root.right, p, q);
    // p、q在左子树
    if(root.val > p.val && root.val > q.val)
        return lowestCommonAncestor(root.left, p, q);
    return root;
};