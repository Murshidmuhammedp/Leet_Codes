/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    var z = ""
    var a = 0
    for (let i = 0; i < spaces.length; i++) {
        z += s.slice(a, spaces[i]) + " ";
        a = spaces[i]
    }
    z += s.slice(a);
    return z
};