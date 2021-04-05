/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    const stack = [], n = pushed.length
    let j = 0
    for(let i = 0; i<n; i++){
        stack.push(pushed[i])
        let cur = stack[stack.length-1]
        while(j < n && cur == popped[j]){
            stack.pop()
            j++
            cur = stack[stack.length-1]
        }
    }
    return j == n
};