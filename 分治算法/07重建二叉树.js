/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 * preorder 根 左 右
 * inorder 左 根 右
 * 此题不含重复元素,故可使用map
 * 1.将inorder存入map中,通过val取到其索引
 * 2.preorder前序遍历的首元素为根结点,以此得到root的索引
 * 3.划分inorder中序遍历的左右边界
 */
// 分治算法: 递归划分左右子树
 var buildTree = function(preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) 
        map.set(inorder[i], i);
    return recur(0, 0, inorder.length-1);
    // 前序遍历的根结点索引, 中序遍历左边界、右边界
    function recur(root, left, right) {
        if(left > right)
            return null;
        let node = new TreeNode(preorder[root]);//根结点
        //中序遍历中的根结点索引,用于划分左右子树
        let index = map.get(preorder[root]);
        //递归左子树
        // 前序左子树根结点: 前序数组中 root+1
        // 中序左边界：不变; 中序右边界: 中序根结点索引-1  ~ 左子树右边界
        node.left = recur(root + 1, left, index -1);
        // 递归右子树
        // 前序右子树根结点：前序数组中 root + 左子树中所有结点数(即中序中 index - left + 1)
        //  中序左边界: 中序根结点索引+1 ~ 右子树左边界; 右边界不变
        node.right = recur(root + index - left + 1, index + 1, right);
        return node;
    }
};