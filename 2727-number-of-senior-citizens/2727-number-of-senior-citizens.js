/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    var count = 0
    for (let i = 0; i < details.length; i++) {
        if (details[i].slice(11, 13) > 60) count++
    }
    return count
};