/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0, r = nums.length -1, res = 0;
    if(r === l && nums[l] === target)
        return 1;
    while(l < r){
        let m = Number.parseInt(l + (r-l)/2);
        if(nums[m] < target)
            l = m + 1;
        else
            r = m;
    }
    if(nums[l] !== target)
        return 0;
    for(let i = l; i<nums.length; i++){
        res++;
        if(nums[i+1] !== nums[i])
            break;
    }
    return res;
};