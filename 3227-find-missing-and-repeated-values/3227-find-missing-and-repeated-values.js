/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const arr1 = []
    const arr = grid.flat().sort((a, b) => a - b)
    const a = arr.filter((val, _, ar) => ar.indexOf(val) !== ar.lastIndexOf(val))
    arr1.push(a[0])
    const newarr = [...new Set(arr)]
    for (let i = 0; i <= newarr.length; i++) {
        if (newarr[i] !== i + 1) {
            arr1.push(i + 1)
            break;
        }
    }
    return arr1
};