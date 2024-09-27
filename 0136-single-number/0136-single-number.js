/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var a = nums.sort()
    for (let i = 0; i < a.length ; i+=2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
};