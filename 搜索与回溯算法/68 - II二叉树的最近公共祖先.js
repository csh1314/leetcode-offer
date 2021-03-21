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

var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q)
        return root;
    // 直接递归左子树
    let left = lowestCommonAncestor(root.left, p, q);
    // 直接递归右子树
    let right =  lowestCommonAncestor(root.right, p, q);
    // left right的情况
    // 1.一个为null、一个不为null 
    //   (1)p、q中有一个在其中一个子树上(不为null的那个子树)
    //   (2)p、q全在其中一个子树上(不为null的那个子树)
    // 2.都为null,说明root左右子树都不包含p、q  return null
    // 3.都不为null,说明root左右子树p、q一边一个  return root
    if(!left)
        return right;
    if(!right)
        return left;
    return root;
}


// 我的sb方法: dfs遍历左右子树 时间复杂度和空间复杂度太高！
 var lowestCommonAncestor = function(root, p, q) {
    if(dfs(root.left, p) && dfs(root.left, q))
        return lowestCommonAncestor(root.left, p, q);
    if(dfs(root.right, p) && dfs(root.right, q))
        return lowestCommonAncestor(root.right, p, q);
    return root;

    function dfs(root, tar){
        if(!root)
            return false;
        if(root.val === tar.val)
            return true;
        return dfs(root.left, tar) || dfs(root.right, tar);
    }
};