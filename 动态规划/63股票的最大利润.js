/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 分析: 设f(j)为右端点为Xj的时候卖出所得的利润
 *       左端点为Xi 若Xi >= Xj时, 则替换i = j, 让i右移
 *  状态转移方程: f(j) = max{ f(j-1), Xj-xi };
 *  初始状态 f(0) = 0
 */
 var maxProfit = function(prices) {
    let profit = 0, i = 0;
    for(let j=1; j<prices.length; j++){
        if(prices[i] >= prices[j])
            i = j;
        profit = Math.max(profit, prices[j]-prices[i])
    }
    return profit;
};