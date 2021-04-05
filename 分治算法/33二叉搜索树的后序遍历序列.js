/**
 * @param {number[]} postorder
 * @return {boolean}
 */
// 后序遍历:左右根
// bst: 左<根<右
var verifyPostorder = function(postorder) {
    return recur(postorder, 0, postorder.length-1);
};
// 递归分治
/**
 * 1.划分左右子树,寻找第一个大于根结点的结点,记为m  m必然为右子树的结点
 *   即可划分出左右子树区间 [i, m-1]、 [m, j-1]  j为总根结点 
 * 2.判断：
 *     左子树区间内的所有结点必须 < postorder[j]
 *     右子树区间内的所有结点必须 > postorder[j]
 *  递归划分即可
 */
function recur(p, i, j){
    if(i >= j)
        return true;
    let x = i;
    while(p[x] < p[j]) x++;
    let m = x;
    while(p[x] > p[j]) x++;
    return x === j && recur(p, i, m-1) && recur(p, m, j - 1)
}