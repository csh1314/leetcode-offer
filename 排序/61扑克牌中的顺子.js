/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1~13   0大小王万能牌 
// 除0之外都不能重复
 var isStraight = function(nums) {
    nums.sort((x,y) => x-y);
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1] && nums[i] !== 0)
            return false;
    }
    let gap = nums[nums.length-1] - nums[0];
    if(gap === 4)
        return true;
    if(nums[0] === 0){
        let i = nums.lastIndexOf(0);
        gap = nums[nums.length-1] - nums[i+1];
        if( i >= nums.length-2 || gap <= 4)
            return true;    
    }
    return false;
};