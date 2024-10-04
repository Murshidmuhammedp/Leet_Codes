/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    var count = 0
    while (num > 0) {
        num % 2 == 0 ? num = num / 2 : num = num - 1;
        count ++
    }
    return count
};