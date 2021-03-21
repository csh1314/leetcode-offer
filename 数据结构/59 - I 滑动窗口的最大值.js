/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(!nums.length || k==0)
        return [];
    let res = [];
    let deque = [];
    //双端队列,存放窗口内元素,每次滑动添加nums[j]
    //左边界i,右边界j  从右边界进入nums开始
    for(let i=1-k, j=0; j<nums.length; i++,j++){
        // 删除deque中的nums[i-1] (向右移动)
        if(i > 0 && deque[0] === nums[i-1])
            deque.shift();
        // 保持deque递减
        while(deque.length && deque[deque.length-1]<nums[j])
            deque.pop();
        deque.push(nums[j]);
        // 左边界进入后才开始push
        if(i >= 0)
            res.push(deque[0]);
    }
    return res;
};