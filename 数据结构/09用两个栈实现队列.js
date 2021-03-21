var CQueue = function() {
    this.stack1 = [];//存入数据的栈
    this.stack2 = [];//删除栈，便于返回stack1删除的头部
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 优先直接返回删除栈stack2中的元素
    if(this.stack2.length) 
        return this.stack2.pop();
    while(this.stack1.length) 
        // 将入栈中元素推入删除栈中
        this.stack2.push(this.stack1.pop())
    return this.stack2.pop() || -1;
};


/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */