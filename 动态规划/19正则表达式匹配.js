/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * 规则：'.'匹配任意字符,'*'表匹配前一个字符0或多个
 */
 var isMatch = function(s, p) {
    // return new RegExp('^'+p+'$').test(s)
    if(s == null || p == null) return false
    const slen = s.length, plen = p.length
    const dp = new Array(slen+1)
    for(let i = 0; i<dp.length; i++)
        dp[i] = new Array(plen + 1).fill(false)
    dp[0][0] = true
    // 初始化首行
    for(let j = 1; j<plen+1; j++)
        if(p[j-1] == '*')
            dp[0][j] = dp[0][j-2]
    // 迭代
    for(let i = 1; i<slen+1; i++){
        for(let j = 1; j<plen+1; j++){
            if(s[i-1] == p[j-1] || p[j-1] == '.')
                dp[i][j] = dp[i-1][j-1]
            else if(p[j-1] == '*'){
                if(s[i-1] == p[j-2] || p[j-2] == '.')
                    dp[i][j] = dp[i][j-2] || dp[i-1][j-2] || dp[i-1][j]
                else
                    dp[i][j] = dp[i][j-2]
            }   
        }
    }
    return dp[slen][plen]
};