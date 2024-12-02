/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const b = sentence.split(" ")
    for (i = 0; i < b.length; i++) {
        const c = (b[i].startsWith(searchWord));
        if (c) return i + 1;
    }
    return -1
};