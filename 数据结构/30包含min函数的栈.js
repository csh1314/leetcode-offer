/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.minStack.unshift(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minStack[0]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack.reduce((prev, val)=>{return prev<val ? prev : val });
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */