/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 二分进行添加 => 保证有序 无需重新排序
    let l = 0, r = this.data.length, m
    while(l < r){
        m = parseInt((l+r)/2)
        this.data[m] > num ? r = m : l = m + 1
    }
    this.data.splice(l, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.data.length
    if(!len)
        return null
    let m = len/2
    if(Number.isInteger(m))
        return (this.data[m-1] + this.data[m])/2
    else
        return this.data[parseInt(m)]
        
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */