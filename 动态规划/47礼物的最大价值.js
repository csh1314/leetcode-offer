/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 分析: 自底向上 bottom-up
 * 设f(i,j)为走到(i,j)位置的总价值
 * f(i,j) = { max{f(i-1,j)+val, f(i,j-1)+val}  }
 * 须判断 i,j 是否为0 
 */
 var maxValue = function(grid) {
    const m = grid.length, n = grid[0].length;
    // 初始化第一列
    for(let i =1; i<m; i++)
        grid[i][0] += grid[i-1][0];
    // 初始化第一行
    for(let j=1; j<n; j++)
        grid[0][j] += grid[0][j-1];
    for(let i=1; i<m; i++)
        for(let j=1; j<n; j++)
            grid[i][j] += Math.max(grid[i][j-1], grid[i-1][j]);
    return grid[m-1][n-1];
};