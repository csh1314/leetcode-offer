/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const numberSet = new Set();
    let result;
    for(let number of nums){
        if(numberSet.has(number)){
            result = number;
            break;
        }
        numberSet.add(number);
    }
    return result;
};