/**
 * @param {number} n
 * @return {number}
 */
/** 
 *推导:  1位数    1~9     占9位
 *       2位数   10~99    占90*2位
 *       3位数   100~999   占900*3位
 *       i位数    ....    占 9*10**(i-1)*i位
 *思路: 找出位置所在数字和所在数字中的第几位即可
 */  

 var findNthDigit = function(n) {
    if(n < 10)
        return n;
    // 所找数字属于i位数
    let i = 1, size = 0;
    while(true){
        size += 9 * 10**(i-1) * i;
        if(n < size)
            break;
        i++;
    }
    // sub表i-1位的总位置数
    let sub = size - 9 * 10**(i-1) * i ;
    // i位数的第pos个数
    let pos = Math.ceil((n-sub)/i);
    // 此数的第bit位
    let bit = (n-sub-1)%i;
    let ans = (10**(i-1) + pos - 1).toString()[bit];
    return ans;
};