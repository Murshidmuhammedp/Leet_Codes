/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = details => details.filter((data) => data.slice(11, 13) > 60).length
