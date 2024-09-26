/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const a=digits.join('')
    const  b=BigInt(a)+BigInt(1)
    return b.toString().split('').map(Number)
};