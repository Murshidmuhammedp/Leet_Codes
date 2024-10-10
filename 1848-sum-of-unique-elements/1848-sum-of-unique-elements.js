/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    var unique = nums.filter((val, index, arr) => arr.indexOf(val) === arr.lastIndexOf(val));
    return unique.reduce((val, initial) => val + initial, 0);
};