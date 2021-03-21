/**
 * @param {number} n
 * @return {number}
 */
/**
 * 分析方法: 自顶向下 top-down
 * 设 f(n)为跳n阶台阶的跳法
 * 则至最后一步时, 可能为跳1阶, 也可能跳2阶
 * 即可推出 f(n) = f(n-1) + f(n-2)
 * 等价于斐波那契数列方程
 * 初始状态：f(0) = 1, f(1) = 1, f(2) = 2
 * 转移方程: f(n+1) = f(n) + f(n-1)
 */
 var numWays = function(n) {
    let a = 1,b = 1,sum;
    const constant = Math.pow(10,9) + 7;
    for(let i=0; i<n; i++){
        sum = (a+b) % constant;
        a = b;
        b = sum;
    }
    return a;
};