/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 // dfs 
 var exist = function(board, word) {
    const path = word.split('');
    let k = 0;//k用来记录path已走路径的长度
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(dfs(board, path, i, j, k))
                return true;
        }
    }
    return false;
};
const dfs = (board, path, i, j, k) => {
    if(i >= board.length || i<0 || j>board[0].length || j<0 || board[i][j] !== path[k])
        return false;
    if(k === path.length-1)
        // 遍历完成
        return true;
    board[i][j] = '/0'; //已经遍历的标记为'/0',防止重复遍历
    let res = dfs(board, path, i+1, j, k+1) || dfs(board, path, i, j+1, k+1) ||
              dfs(board, path, i-1, j, k+1) || dfs(board, path, i, j-1, k+1);
    board[i][j] = path[k]; //复原board[i][j]
    return res;
}