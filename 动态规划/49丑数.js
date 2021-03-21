/**
 * @param {number} n
 * @return {number}
 */
/**
 * 分析: 设Xi为丑数数组第i个元素ugly[i]
 * 填充ugly数组为:
 *     2*a 3*b 5*c
 * ugly[i] = min{ 2*a, 3*b, 5*c }
 * 令a,b,c首先指向1即dp[0], 使用一次即+1
 * 按照从小到大的顺序
 */
 var nthUglyNumber = function(n) {
    const dp = [1];
    let a=1, b=1, c=1;
    for(let i=1; i<n; i++){
        let n2 = dp[a]*2, n3 = dp[b]*3, n5 = dp[c]*5;
        let temp = Math.min(Math.min(n2, n3), n5);
        dp.push(temp);
        if(dp[i] === n2) a++;
        if(dp[i] === n3) b++;
        if(dp[i] === n5) c++;
    }
    return dp[n-1]
};
