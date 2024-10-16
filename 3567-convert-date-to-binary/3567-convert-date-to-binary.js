/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    const [yy, mm, dd] = date.split('-')
    const a = parseInt(yy).toString(2)
    const b = parseInt(mm).toString(2)
    const c = parseInt(dd).toString(2)
    return `${a}-${b}-${c}`
};