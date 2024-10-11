/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    const arr = [];
    const a = nums.sort((a, b) => a - b)
    for (let i = 0; i < a.length; i++) {
        if (a[i] == target) arr.push(i)
    }
    return arr
};