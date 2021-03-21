/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    //  A与B不得同时为null
    // 考虑到B的左右结点是可以为空的,避免代码逻辑混乱
    // 另起函数 isSubStructureHelper 来帮忙判断
    return (A!==null&&B!==null) && (isSubStructureHelper(A, B) ||
            // 递归A的左子树和右子树
            isSubStructure(A.left, B) || isSubStructure(A.right, B));
};

const isSubStructureHelper = (A, B) =>{
    if(B === null) return true;
    if(A === null || A.val !== B.val) return false;
    return isSubStructureHelper(A.left, B.left) && isSubStructureHelper(A.right, B.right);
}