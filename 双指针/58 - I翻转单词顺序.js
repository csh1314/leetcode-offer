/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.trim();
    let j = s.length-1, i = j, res='';
    // 单词顺序翻转,从尾到头遍历
    while(i >= 0){
        // 搜索到倒数第一个空格
        while(i >= 0 && s.charAt(i) !== ' ')
            i--;
        // 添加单词
        res += s.substring(i+1, j+1)+" ";
        // 消除单词与单词间的空格
        while(i >=0 && s.charAt(i) == ' ')
            i--;
        // 指向下一个单词
        j = i;
    }
    return res.trim();
};