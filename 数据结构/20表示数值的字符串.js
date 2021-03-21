/**
 * @param {string} s
 * @return {boolean}
 */
// 完全不会做.... 看大佬的题解
// 有限状态自动机
 var isNumber = function(s) {
    //  字符串从左到右检测,定义以下的9中状态
     let states = [
        new Map().set(' ', 0).set('s', 1).set('d', 2).set('.', 4),
        new Map().set('d', 2).set('.', 4),
        new Map().set('d', 2).set('.', 3).set('e', 5).set(' ', 8),
        new Map().set('d', 3).set('e', 5).set(' ', 8),
        new Map().set('d', 3),
        new Map().set('s', 6).set('d', 7),
        new Map().set('d', 7),
        new Map().set('d', 7).set(' ', 8),
        new Map().set(' ', 8)
     ]
     let p = 0, t;
     for(let c of s){
        if(c >= '0' && c <= '9') t = 'd';
        else if(c == '+' || c == '-') t = 's';
        else if(c == 'e' || c == 'E') t = 'e';
        else if(c == '.' || c == ' ') t = c;
        else t = '?';
        if(!states[p].has(t))
            return false;
        p = states[p].get(t);
     }
     return p == 2 || p == 3 || p == 7 || p == 8;

};