/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var b = ''
    const a = s.toLowerCase().split('')
    for (let i = 0; i < a.length; i++) {
        if (/[a-z0-9]/.test(a[i])) {
            b += a[i]
        }
    }
    return b == b.split('').reverse().join('')
};