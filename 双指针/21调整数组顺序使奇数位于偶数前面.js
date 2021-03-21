/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 快速排序
var exchange = function(nums) {
    let i = 0, j = nums.length-1, temp;
    while(i < j){
        while(i < j && nums[i]%2!==0) i++;
        while(i < j && nums[j]%2===0) j--;
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;
};