/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    const a = Math.sqrt(num)
    return Number.isInteger(a) ? true : false;
};