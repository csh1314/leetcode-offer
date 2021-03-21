var MaxQueue = function() {
    this.maxQueue = [];
    this.deqQueue = [];//双向队列滑动窗口
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.deqQueue.length?this.deqQueue[0]:-1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    // 滑动窗口按递减方式存放
    const { deqQueue, maxQueue } = this;
    maxQueue.push(value);
    if(deqQueue[0] === value)
        deqQueue.shift()
    // 删除比弹入元素小的元素——保持递减
    while(deqQueue.length && deqQueue[deqQueue.length-1] < value)
        deqQueue.pop()
    deqQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    // 删除时，滑动窗口内删除仅需查看第一个元素是否与其相等
    const { maxQueue, deqQueue } = this;
    if(!maxQueue.length) return -1;
    if(maxQueue[0] === deqQueue[0])
        deqQueue.shift();
    return maxQueue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */