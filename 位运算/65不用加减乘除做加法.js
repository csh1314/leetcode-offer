/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
    // 是否需要进位
    if((a & b) === 0)
        return a | b;
    // 需要进位时, 使 a & b左移进位即可
    let x = a ^ b, y = (a & b) << 1;
    return add(x, y);
};