/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    var a = true
    var b = true;
    for (i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            a = false
        }
        if (nums[i] > nums[i - 1]) {
            b = false
        }
    }
    return a || b
};