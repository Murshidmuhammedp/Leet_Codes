/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    var newArray = []
    var a = nums.slice(0, n);
    var b = nums.slice(n);
    for (let i = 0; i < n; i++) {
        newArray.push(a[i], b[i])
    }
    return newArray
};
