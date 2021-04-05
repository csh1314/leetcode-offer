/**
 * @param {number} n
 * @return {number}
 */
/**
 * 思路: 将1~n的个位、十位、百位....的1出现次数相加
 * 数字n为x位的数, 记n的第i位为ni,则将n可写作:nx n(x-1)n(x-2)...n2n1 
 * ni 称作当前位 记作 cur
 * n(i-1)n(i-2)..n2n1 称作低位 记作 low
 * nx n(x-1)..n(i+1) 称作高位 记作 high
 * 10^i 称作位因子 记作 digit
 */
 var countDigitOne = function(n) {
    let digit = 1, ans = 0;
    let high = parseInt(n/10), cur = n % 10, low = 0;
    while(high !== 0 || cur !== 0){
        if(cur === 0)
            ans += high * digit;
        else if(cur === 1)
            ans += high * digit + low + 1;
        else 
            ans += (high + 1) * digit;
        low += cur * digit;
        cur = high % 10;
        high = parseInt(high/10);
        digit *= 10;
    }
    return ans;
};