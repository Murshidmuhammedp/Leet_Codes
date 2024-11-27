/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    var a = []
    for (i = 0; i < nums.length; i++) {
        a.push(nums[i].toString().split('').map(Number).reduce((acc, val) => acc + val, 0))
    }
    return Math.min(...a);
};