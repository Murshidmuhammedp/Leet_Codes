/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const b = sentence.split(" ")
    for (i = 0; i < b.length; i++) {
        if (b[i].startsWith(searchWord)) return i + 1
    }
    return -1
};