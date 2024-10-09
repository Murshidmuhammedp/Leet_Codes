/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    var count = 0
    for (let i = 0; i < details.length; i++) {
        const age = details[i].slice(11, 13)
        if (age > 60) {
            count++
        }
    }
    return count
};