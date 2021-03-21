/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    let res = [];
    let x = 0;
    for(let i = 0; i<n; i++){
        x += 9 * 10**i;
    }
    for(let i = 1; i<x+1; i++){
        res.push(i);
    }
    return res;
};