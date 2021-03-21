/**
 * @param {string} s
 * @return {character}
 */
// map  key~字符   value~是否重复
 var firstUniqChar = function(s) {
    let map = new Map();
    for(let i of s)
        map.set(i, !map.has(i));
    for(let i of s){
        if(map.get(i))
            return i;
    }
    return " ";
};

 var firstUniqChar = function(s) {
    let sset = new Set(), res = new Set();
    for(let i of s){
        if(sset.has(i))
            res.delete(i);
        else
            res.add(i)
        sset.add(i);
    }
    // 取出res内第一个元素
    const iterator = res.values();
    return iterator.next().value || " ";
};