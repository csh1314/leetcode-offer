/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    quickSort(0, arr.length-1);
    return arr.slice(0, k);

    // 快速排序————“哨兵划分” + “递归”
    //  哨兵划分: 以数组某个元素为基准数
    //           将所有小于其的数移至左边，大于的移至右边
    //  递归: 对左右子数组递归执行哨兵划分,直至数组长度为1
    function quickSort(l, r) {
        if(l >= r) return;
        let i = l, j = r;
        // 以arr[l]作为基准数
        while(i < j){
            while(i < j && arr[j] >= arr[l]) j--;
            while(i < j && arr[i] <= arr[l]) i++;
            swap(i, j);
        }
        // i位置左右两边已排好,将 arr[i]、arr[l]值互换
        swap(i, l);
        // 递归左右子数组
        quickSort(l, i-1);
        quickSort(i+1, r);
    }
    function swap(i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // 归并排序
    function mergeSort(l, r){
        if(l >= r)
            return;
        let m = Number.parseInt((l+r)/2);
        mergesort(l, m);
        mergesort(m+1, r);
        let temp = [];
        for(let i =0; i<=r; i++)
            temp[i] = arr[i];
        let i = l, j = m + 1;
        for(let k = l; k<=r; k++){
            if(i === m + 1){
                arr[k] = temp[j++];
            }else if(j === r+1 || temp[i] <= temp[j]){
                arr[k] = temp[i++];
            }else {
                arr[k] = temp[j++];
            }
        }
    }
   
};