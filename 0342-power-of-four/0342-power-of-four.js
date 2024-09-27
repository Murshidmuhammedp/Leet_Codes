/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    for (let i = 0; i < 20; i++) {
        const a = Math.pow(4, i)
        if (a == n) {
            return true
        }
    }
    return false
};