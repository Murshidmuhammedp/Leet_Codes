/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    var index = 0
    var value = 0
    var sum = 0
    for (j = 1; j <= nums.length - 1; j++) {
        value += nums[index]
        var val = 0
        for (i = index + 1; i < nums.length; i++) {
            val += nums[i]
        }
        var result = value - val
        index++
        if (result % 2 == 0) sum++
    }
    return sum
};