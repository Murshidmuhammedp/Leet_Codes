/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var y = x.toString().split('').reverse().join('')
    return y == x 
};