/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/**
 * 二分将时间复杂度O(n)降为O(log n)
 * 快速幂
 * x^n = {  (x^2)^n//2, n为偶数
 *          x(x^2)^n//2, n为奇数
 *      }
 */
 var myPow = function(x, n) {
    let res = 1.0;
    // 超过number整数最大/最小值时会越界
    // 使用BigInt
    let b = BigInt(n);
    if(b < 0){
        x = 1 / x;
        b = -b;
    }
    while(b > 0){
        // BigInt 只能与 BigInt 作位运算
        if((b&1n) === 1n) //即 n % 2 == 1
            res *= x;
        x *= x; //即 x = x^2
        b >>= 1n; //b右移一位  即 n /= 2;
    }
    return res;
};