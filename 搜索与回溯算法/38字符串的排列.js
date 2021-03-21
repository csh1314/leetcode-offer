/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * 思路:
 *    固定第1个位置, 再固定第2个位置 ...第n个位置
 * 去重剪枝：
 *    固定此位置时,保证此位置所在字符只能出现一次
 *    使用hashset来去重进行“剪枝”(跳出此次循环)
 * 固定位置与恢复位置:
 *    1.通过交换字符位置来固定位置 给定指定位置i,然后循环中的j位置与i位置互换
 *    2.直接递归到下层直至所有位置固定完成
 *    3.恢复位置————保证初始状态,下一轮循环时交换不同的元素固定位置
 *  递归一次即是一种情况,在终止条件中填充此情况的字符串
 *  递归完成时即得到了所有情况的字符串数组
 */
 var permutation = function(s) {
    let a = s.split(''), res = [];
    recur(a, 0);
    return res;

    function recur(a, i){
        if(i === a.length-1){
            res.push(a.join(''))
            return;
        }  
        let sset = new Set()
        for(let j = i; j<a.length; j++){
            if(sset.has(a[j]))
                continue;
            sset.add(a[j]);
            // 交换位置, 固定a[i]在j位置
            [a[j], a[i]] = [a[i], a[j]]
            // 固定第i+1位字符 a[i+1]
            recur(a, i+1);
            // 恢复位置
            [a[j], a[i]] = [a[i], a[j]]
        }
    }
};