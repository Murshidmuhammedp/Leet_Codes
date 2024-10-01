/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let grtnum = 0
    for (let i = 0; i < accounts.length; i++) {
        var count = 0
        for (let j = 0; j < accounts[i].length; j++) {
            var count = count + accounts[i][j]
        }
        if (grtnum < count) {
            grtnum = count
        }
    }
    return grtnum
};