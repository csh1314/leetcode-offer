/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 轨迹: 向右 => 向下 => 向左 => 向上 => 向右...
var spiralOrder = function(matrix) {
    let res = [];
    move(0, 0, matrix, 'right')
    return res;

    function move(i, j, matrix, status){
        if( i>=matrix.length || j>=matrix[0].length || i<0 || j<0 || matrix[i][j]==='/0')
            return;
        res.push(matrix[i][j]);
        // 已走标记
        matrix[i][j] = '/0';
        // 状态开关
        // 每种状态定义当前执行状态和下一步需要执行的状态
        // 递归执行
        switch(status) {
            case 'right':
                move(i, j+1, matrix, 'right');
                move(i+1, j, matrix, 'bottom');
                break;
            case 'bottom':
                move(i+1, j, matrix, 'bottom');
                move(i, j-1, matrix, 'left');
                break;
            case 'left':
                move(i, j-1, matrix, 'left');
                move(i-1, j, matrix, 'top');
                break;
            case 'top':
                move(i-1, j, matrix, 'top');
                move(i, j+1, matrix, 'right');
                break;
        }
        
    }
};