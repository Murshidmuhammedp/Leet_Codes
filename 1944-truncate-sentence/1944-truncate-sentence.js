/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let word = []
    const a = s.split(' ')
    for (let i = 0; i < k; i++) {
        word.push(a[i])
    }
    return word.join(' ')
};