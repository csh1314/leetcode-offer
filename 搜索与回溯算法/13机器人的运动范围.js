/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/**
 * 分析出: ***向右走或向下走即可遍历完所有格子***
 *  m,n  [1,100]
 *  使用 dfs
 */
 var movingCount = function(m, n, k) {
    const visited = new Array();
    for(let i=0; i<m; i++){
        visited[i] = new Array();
        for(let j=0; j<n; j++){
            visited[i][j] = false;
        }
    }
    const res = dfs(0, 0, visited, k);
    return res;
};

const dfs = (i, j, visited, k) => {
    // a,b 分别为 i,j 的位数和
    let a = i<100 ? Math.floor(i/10)+i%10 : Math.floor(i/100);
    let b = j<100 ? Math.floor(j/10)+j%10 : Math.floor(j/100);
    if( i >= visited.length || j >= visited[0].length || a+b > k || visited[i][j] )
        return 0;
    visited[i][j] = true;
    return 1 + dfs(i+1, j, visited, k) + dfs(i, j+1, visited, k);
}