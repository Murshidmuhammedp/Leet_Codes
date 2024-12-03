/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    var z = ""
    var a = 0
    for (i = 0; i < s.length; i++) {
        if (i == spaces[a]) {
            z += " "
            z += s[i]
            a++
        } else {
            z += s[i]
        }
    }
    return z
};