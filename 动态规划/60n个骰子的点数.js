/**
 * @param {number} n
 * @return {number[]}
 */
// dp
// dp[i][j] = dp[i-1][0] + dp[i-1][1] + ... + dp[i-1][j]
// 这里不用保存每一层,节省空间一维数组即可
// 每次遍历时除6,只做最后除的时候可能会精度丢失
var dicesProbability = function(n) {
    let dp = [1.0,1.0,1.0,1.0,1.0,1.0].map(item => item/6.0);
    for(let i = 2; i<=n; i++){
        let arr = new Array(5*i+1);
        arr.fill(0)
        for(let j = 0; j<dp.length; j++){
            for(let k = 0; k<6; k++)
                arr[j + k] += dp[j]/6.0
        }
        dp = arr
    }
    return dp
};