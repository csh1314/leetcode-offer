/**
 * @param {number[]} nums
 * @return {string}
 */
// 排序规则的改变:
//      拼接字符串 x+y  若 x+y > y+x 则 x"大于"y
//                     若 x+y < y+x 则 x"小于"y
// 使用快速排序
var minNumber = function(nums) {
    const strs = nums.map(num => num.toString());
    strs.sort((x,y) => (x+y)-(y+x))
    // quickSort(strs, 0, strs.length-1);
    return strs.join('');

    function quickSort(nums, l, r){
        if(l >= r)  return;
        let i = l, j = r;
        // 以nums[l]为基准数
        while(i < j){
            while(i < j && (nums[j] + nums[l]) >= (nums[l] + nums[j])) j--;
            while(i < j && (nums[i] + nums[l]) <= (nums[l] + nums[i])) i++;
            swap(nums, i, j);
        }
        swap(nums, i, l);
        quickSort(nums, l, i-1);
        quickSort(nums, i+1, r);
    }
    function swap(nums, i, j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};