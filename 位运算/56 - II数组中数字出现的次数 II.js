/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：出现3次的数 32位二进制中的各二进制位出现的次数为3的倍数
// 记录入数组最后 %3 取余即可
// 以此可解决 除一个数字外其余数字出现m次的类型问题
var singleNumber = function(nums) {
    // count记录 32位二进制中 每一位中1出现的次数
    let count = [];
    // 初始化count数组
    for(let i =0; i< 32; i++)
        count[i] = 0;
    for(let num of nums){
        // 遍历更新第i位1的个数
        for(let i =0; i< 32; i++){
            count[i] += num & 1;
            num >>=1;
        }
    }
    let res = 0, m = 3;
    // 各位数依次取余,用 | 填入即可
    for(let i = 31; i>=0; i--){
        res <<= 1;
        res |= count[i] % m;
    }
    return res;
};


// 大佬写的状态机,难懂~
var singleNumber = function(nums) {
    let x = 0, y =0;
    for(let num of nums){
        x = x ^ num & ~y;
        y = y ^ num & ~x;
    }
    return x;
};