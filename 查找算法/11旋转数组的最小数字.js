/**
 * @param {number[]} numbers
 * @return {number}
 */
// 二分查找 O(log n)
var minArray = function(numbers) {
    let l = 0, r = numbers.length-1;
    while(l < r){
        let m = Number.parseInt((l + r)/2); 
        if(numbers[m] > numbers[r])
            l = m + 1;
        else if(numbers[m] < numbers[r])
            r = m;
        else
            r--;
    }
    return numbers[l];
};


// 暴力法 O(n)
var minArray = function(numbers) {
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] > numbers[i+1])
            return numbers[i+1];
    }
    return numbers[0];
};