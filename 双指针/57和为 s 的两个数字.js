/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let i = 0, j = nums.length -1, res = [];
    while(true){
        let x = nums[i] + nums[j];
        if(x < target)
            i++;
        else if(x > target)
            j--;
        else{
            res.push(nums[i],nums[j]);
            break;
        }
    }
    return res;
};