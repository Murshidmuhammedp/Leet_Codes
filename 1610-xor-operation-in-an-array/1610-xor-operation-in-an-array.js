/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    var arr = []
    for (i = 0; i < n; i++) {
        arr.push(start + 2 * i)
    }
    return arr.reduce((acc, val) => acc ^ val, 0)
};