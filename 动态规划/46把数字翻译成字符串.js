/**
 * @param {number} num
 * @return {number}
 */
/**
 * 分析:Xi为第i个字符 
 * f(i)为从左至右或从右至左翻译到Xi时的方案数
 * 状态转移方程: f(i) = { f(i-1)+f(i-2), X(i-1)*10+Xi∈[10,25]  
 *                       f(i-1),  X(i-1)*10+Xi∈[0,10)∪(25,99]  
 *                      }
 * 初始状态: f(0) = 1, f(1) = 1
 */

 var translateNum = function(num) {
    let dp = num.toString();
    let a = 1, b =1, c, str;
    // i从2开始 (0,2)即为第一个两位数 起始即为f(2)
    for(let i =2; i<=dp.length; i++){
        str = dp.substring(i-2,i);
        c = str >= 10 && str <= 25 ? a+b : a;
        b = a;
        a = c;
    }
    return a;
};

