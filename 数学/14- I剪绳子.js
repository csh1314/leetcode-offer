/**
 * @param {number} n
 * @return {number}
 */
/**
 * 数学结论: 算术平均根 >= 几何平均根
 * 即有 k[0]k[1]...k[m-1] <= (k[0]+...+k[m-1])^m / m^m
 * 在k[0] = k[1] = ... = k[m-1]时取等号,k[i]取整
 * dp[m]表切成m段的最大值
 * dp[i] = { (n/i)**i , n/i为整数时
 *            n/i不为整数时,令x = Math.round(n/i) 本题必须四舍五入
 *            (x**i)*(n-x*(i-1)) 
 *         } 
 */
 var cuttingRope = function(n) {
    // if(n=2)  return 1;
    // i表分为i段,每段长为x
    let i = 2, x = n/2, res = 1, temp;
    while( x>1 ){
        if(!Number.isInteger(x)){
            x = Math.round(x);
            temp = x**(i-1) * (n-x*(i-1));
        }else
            temp = x**i;
        res = Math.max(res, temp);
        // x四舍五入为1后无需再分
        x = x === 1 ? x : n/++i;
    }
    return res;
};