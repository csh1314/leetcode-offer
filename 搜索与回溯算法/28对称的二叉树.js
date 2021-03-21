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
 var isSymmetric = function(root) {
    return !root || isSymmetricHelper(root.left, root.right);
};
const isSymmetricHelper = (left, right) =>{
    // 有一个为null 有一个不为null
    if( (left && !right) || (!left && right) )
        return false;
    // 左右全为null 或 全不为null
    return (!left && !right) || (left.val === right.val &&
           isSymmetricHelper(left.left, right.right) &&
           isSymmetricHelper(left.right, right.left));
}