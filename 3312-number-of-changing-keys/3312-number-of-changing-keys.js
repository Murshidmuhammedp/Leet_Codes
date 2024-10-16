/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    var count = 0
    const b = s.toUpperCase()
    for (i = 0; i < b.length - 1; i++) {
        if (b[i] !== b[i + 1]) count++;
    }
    return count
};