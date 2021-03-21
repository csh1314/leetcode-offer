/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 定义状态 f(i) 为以nums[i]结尾的最大连续子数组和
 * 状态转移方程: f(i) = max{ f(i-1)+nums[i], nums[i] }
 * 初始状态: f(0) = nums[0] 用pre记录f(i-1)
 */
 var maxSubArray = function(nums) {
    let pre = 0, maxSum = nums[0];
    nums.forEach(num => {
        pre = Math.max(pre+num, num);
        maxSum = Math.max(pre,maxSum);
    })
    return maxSum;
};
