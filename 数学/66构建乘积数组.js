/**
 * @param {number[]} a
 * @return {number[]}
 */
// b[i] = 1
 var constructArr = function(a) {
    if(!a.length)
        return [];
    let b = [1], temp = 1;
    // 下三角累乘
    // 从第二个开始(因为b[0]初始为1)
    for(let i = 1; i<a.length; i++){
        b[i] = b[i-1] * a[i-1]
    }
    // 上三角累乘
    // 从倒数第二个开始(因为b[i]是累乘过的值了)
    for(let i = a.length -2; i>=0; i--){
        temp *= a[i+1];
        b[i] *= temp;
    }
    return b;
};