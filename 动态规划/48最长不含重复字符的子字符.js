/**
 * @param {string} s
 * @return {number}
 */
/**
 * 分析: 最长无重复子串  -->  用hashMap来记录这段子串的每个字符及索引
 * 设dp[n]为 结尾索引为n的最长子串长
 * 有s[m] == s[n]  m>n
 * (1)dp[m-1]的区间左端点<=n,说明n在dp[m-1]区间内,即dp[m-1]>=m-n,则dp[m]= m-n
 * (2)dp[m-1]的区间左端点>n,说明n在其区间外,且n到dp[m-1]的左端点内存在重复
 *    则有dp[m] = dp[m-1] + 1;
 * 转移方程: dp[m] = {  dp[m-1]+1,   dp[m-1]<m-n
 *                      m-n,        dp[m-1]>=m-n
 *                  }
 */
 var lengthOfLongestSubstring = function(s) {
    let strArr = s.split('');
    let strMap = new Map();
    let res = 0, j = -1, temp = 0;
    for(let i=0; i<strArr.length; i++){
        if(strMap.has(strArr[i]))
            // 有重复则取出前重复字符索引给j
            j = strMap.get(strArr[i]);
        else
            // j为-1则说明无重复,那么i-j即是i+1递增
            j = -1;
        temp = temp < i-j ? temp+1 : i-j;//由dp[i-1]得到dp[i]
        strMap.set(strArr[i],i);
        res = Math.max(res, temp);//max(dp[i-1],dp[i])
    }
    return res;
};