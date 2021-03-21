/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 约瑟夫环
// dp法
// dp[i]表第i次删除的数字
// 状态转移方程: dp[i] = (dp[i-1]+m)%i
var lastRemaining = function(n, m) {
    let x = 0;
    for(let i = 2; i <= n; i++)
        x = (x + m) % i;
    return x;
};

// sb方法
var lastRemaining = function(n, m) {
    let nums = [];
    for(let i = 0; i < n; i++) nums[i] = i;
    let i = 0;
    while(nums.length > 1){
        if(i + m-1 >= nums.length)
            i = (i + m - 1) % nums.length
        else
            i = i + m -1;
        nums.splice(i, 1)
    }
    return [nums];
};