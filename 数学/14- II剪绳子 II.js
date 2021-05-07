/**
 * @param {number} n
 * @return {number}
 */
// 相较于 剪绳子I 要做大数求余处理
// 核心仍为 算术平均根 >= 几何平均根 
var cuttingRope = function(n) {
    const arr = [0,0,1,2,4]
    if(n < 5)
        return arr[n]
    const mod = Math.pow(10,9) + 7
    let ans = 1
    while(n >= 5){
        ans = ans%mod * 3
        n -= 3
    }
    return ans*n%mod
};