/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let a = ''
    const max = Math.max(word1.length, word2.length)
    for (let i = 0; i < max; i++) {
        a += word1.slice(i, i + 1) + word2.slice(i, i + 1)
    }
    return a
};