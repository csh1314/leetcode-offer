/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    return nums[parseInt((nums.length-1)/2)];
};