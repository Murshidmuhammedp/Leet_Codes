/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length <= 1) return nums[0]
    const a = nums.sort().length / 2
    var count = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            count += 1
            if (count > a) return nums[i]
        }
    }
    count = 1
};