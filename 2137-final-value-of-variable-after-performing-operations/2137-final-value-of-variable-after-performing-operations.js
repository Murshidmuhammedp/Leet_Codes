/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    var x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "++X" || operations[i] == "X++") {
            x = x + 1
        } else {
            x = x - 1
        }
    }
    return x
};