/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// 不能创建新的节点
var treeToDoublyList = function(root) {
    if(!root) return root;
    if(!root.left && !root.right){
        root.left = root.right = root
        return root
    }
    let helper = [];
    dfs(root);
    let n = helper.length -1;
    for(let i =1; i<n; i++){
        helper[i].right = helper[i+1];
        helper[i].left = helper[i-1];
    }
    // 首尾节点的连接
    helper[0].right = helper[1];
    helper[0].left = helper[n];
    helper[n].right = helper[0];
    helper[n].left = helper[n-1];
    return helper[0];
    // 中序遍历dfs
    function dfs(root){
        if(!root)
            return;
        dfs(root.left);
        helper.push(root);
        dfs(root.right);
    }
};