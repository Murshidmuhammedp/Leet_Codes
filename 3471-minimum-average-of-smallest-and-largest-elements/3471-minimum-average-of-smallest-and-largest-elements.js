/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    var num = 100
    const a = nums.sort((a, b) => a - b)
    for (let i = 0; i < a.length / 2; i++) {
        const b = (a[i] + a[a.length - i - 1]) / 2
        if (b < num) {
            num = b
        }
    }
    return num
};