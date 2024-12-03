/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend == -2147483648 && divisor == -1) {
        return 2147483647
    }
    const a = dividend / divisor
    return a > 0 ? Math.floor(a) : Math.ceil(a);
}