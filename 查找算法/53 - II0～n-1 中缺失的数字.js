/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组 key ~ value 二分查找
 var missingNumber = function(nums) {
    let l = 0, r = nums.length-1; 
    while(l <= r){
        let m = Number.parseInt(l + (r-l)/2);
        if(nums[m] === m)
            l = m + 1;
        else 
            r = m - 1;
    }
    return l;
};