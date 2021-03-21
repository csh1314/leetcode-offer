/**
 * @param {number} n
 * @return {number}
 */
// Dynamic Programming
// 动态规划解法:
 var fib = function(n) {
    // f(n) = f(n-1) + f(n-2)
    // 定义状态: dp[i] 代表 f(i)
    // 初始状态: dp[0]=0, dp[1]=1
    // 转移方程: dp[i+1] = dp[i] + dp[i-1]
    let a =0, b =1, sum;
    const constant = Math.pow(10,9) + 7;
    for(let i=0;i<n;i++){
        sum = (a + b) % constant;
        a = b;
        b = sum;
    }
    return a;
};

// 记忆递归解法：
var fib = function(n) {
    return dfs(n, []);
};
// 用数组来记忆缓存,避免重复递归取值
function dfs(n, fibArr){
    const constant = Math.pow(10,9)+7;
    if(n === 0 || n === 1) 
        return n;
    if(fibArr[n])
        return fibArr[n];
    let left = dfs(n-1, fibArr)%constant;
    let right = dfs(n-2, fibArr)%constant;
    fibArr[n] = (left+right)%constant;
    return (left+right)%constant;
}






