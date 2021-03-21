/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    // return s.replace(/\s/g,'%20');
    //空格的unicode码值是32
    let res = '';
    for (let c of s) res += c.charCodeAt() === 32 ? '%20' : c;
    return res;
};