/**
 * @param {number} n
 * @return {number}
 */
// 不能用乘除法、循环、判断甚至是三元运算符
var sumNums = function(n) {
    // 逻辑与 A&&B  A成立才会执行B
    let flag = n > 0 && (n += sumNums(n-1)) > 0;
    return n;
};