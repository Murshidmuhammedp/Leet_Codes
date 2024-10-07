/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const newarr = []
    for (let i = 0; i < arr.length; i += size) {
        const a = arr.slice(i, size + i)
        newarr.push(a)
    }
    return newarr
};
