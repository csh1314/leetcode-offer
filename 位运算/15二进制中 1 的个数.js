/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let i = 1, res = 0;
    for(let j =0; j<32; j++){
        // 与运算符 两者相同位置都为1,则该位置返回1,否则返回0
        if(n & i)
            res++;
        // 填充0向左移位
        i <<= 1;
    }
    return res;
};