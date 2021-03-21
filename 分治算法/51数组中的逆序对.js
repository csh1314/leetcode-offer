/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治算法——归并排序
var reversePairs = function(nums) {
    return mergeSort(0, nums.length-1)

    function mergeSort(left, right){
        if(left >= right)
            return 0;
        let mid = Number.parseInt((left + right)/2);
        // 递归进行划分
        let res = mergeSort(left, mid) + mergeSort(mid+1, right);
        let temp = [];
        // 借助辅助数组
        for(let i = left; i<=right; i++){
            temp[i] = nums[i];
        }
        // 合并阶段
        let i = left, j = mid + 1;
        for(let k = left; k<=right; k++){
            // 左边数组合并完成
            // 此时添加右边数组元素 j++
            if(i === mid +1){
                nums[k] = temp[j++];
            }else if(j === right +1 || temp[i] <= temp[j]) {
                // right+1 右边数组合并完成
                // 或是temp[i] <= temp[j]时
                // 此时添加左边数组元素
                nums[k] = temp[i++];
            }else {
                // temp[i] > temp[j]
                // 添加右边数组元素
                nums[k] = temp[j++];
                // 记录逆序对
                res += mid - i + 1; 
            }
        }
        // nums排序完毕
        return res;
    }
};