/**
 * @param {number} target
 * @return {number[][]}
 */
// i+...+j =>  (i+j)n/2   n=j-i+1
var findContinuousSequence = function(target) {
    let i = 1, res = [];
    while(i+i+1 <= target){
        let j = i + 1, sum = (i + j)*(j-i+1)/2, ans = [];
        while(sum < target){
            j++;
            sum = (i + j)*(j-i+1)/2
        }
        if(sum === target){
            for(let k = i; k<=j; k++) ans.push(k)
            res.push(ans)
        }
        i++;    
    }
    return res;
};