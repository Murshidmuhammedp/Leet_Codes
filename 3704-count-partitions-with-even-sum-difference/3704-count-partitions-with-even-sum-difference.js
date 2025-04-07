/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    var value = 0
    var sum = 0
    for (i = 0; i < nums.length - 1; i++) {
        value += nums[i]
        var val = 0
        for (j = i + 1; j < nums.length; j++) {
            val += nums[j]
        }
        var result = value - val
        if (result % 2 == 0) sum++
    }
    return sum
};