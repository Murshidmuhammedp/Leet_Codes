/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    var ans = []
    var x = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        candies[i] + extraCandies >= x ? ans.push(true) : ans.push(false);
    }
    return ans
};