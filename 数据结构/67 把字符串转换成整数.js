/**
 * @param {string} str
 * @return {number}
 */
 var strToInt = function(str) {
    let strArr = str.trim().split('');
    if(strArr.length === 0)
        return 0;
    const INT_MAX = Math.pow(2,31)-1;
    const INT_MIN = Math.pow(-2,31);
    // 除开个位数后的边界
    const boundary = Math.floor(INT_MAX/10);
    // sign 1正 -1负
    let res = 0, i = 1, sign = 1;
    if(strArr[0] === '-') sign = -1;
    else if(strArr[0] != '+') i = 0;
    for(i; i<strArr.length; i++){
        // 非数字即遍历完成
        if(strArr[i]<'0' || strArr[i]>'9')
            break;
        // res为数字去掉个位数后拼接的数值
        // 比较最后一位是否 > 7  即拼接后>2147483647 
        if(res > boundary || res === boundary && strArr[i] > '7')
            return sign === 1 ? INT_MAX : INT_MIN;
        // 字符转数字: 此数字ASCII码 - 0的ASCII码
        // x=ascii(c)−ascii(′0′)
        res = res * 10 + (strArr[i] - '0');
    }
    return sign * res;
};