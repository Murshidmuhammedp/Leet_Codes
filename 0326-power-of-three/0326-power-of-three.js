/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    for (let i = 0; i < 20; i++) {
        let a = Math.pow(3, i)
        if (a == n) {
            return true
        }
    }
    return false
};