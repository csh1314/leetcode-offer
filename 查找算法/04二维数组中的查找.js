/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 左下角 => 右上角
var findNumberIn2DArray = function(matrix, target) {
    let i = matrix.length - 1, j = 0;
    while(i >= 0 && j < matrix[0].length){
        if(matrix[i][j] > target) 
            i--;
        else if(matrix[i][j] < target)
            j++;
        else 
            return true 
    }
    return false;
}