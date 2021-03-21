/**
 * @param {number[]} postorder
 * @return {boolean}
 */
//  左 右 根    右 > 根 > 左
 var verifyPostorder = function(postorder) {
    let root = postorder[postorder.length-1];
    
    function recur(left, right, root){
        if(left > root || root > right)
            return false;
    }
};