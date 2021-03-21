/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //异或运算^   a ^ a = 0   x ^ 0 = x
 var singleNumbers = function(nums) {
    let x = 0, y = 0, n = 0, m = 1;
    // 遍历异或得到 n = x^y
    for(let num of nums)
        n ^= num;
    // x^y某二进制位为1, 则x与y在此二进制位一定不同
    // 即一个是1 一个是0
    // 使n & m != 0   即 m与n有相同位为1 
    while((n & m) === 0)
        m <<= 1;
    // 根据上面得到的m划分为两个子数组
    // 一个有x,一个有y, 循环异或去重即可
    for(let num of nums){
        if((num & m) !== 0)  x ^= num;
        else y ^= num;
    }
    return [x,y];
};