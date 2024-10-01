/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const arr=[]
    const num = nums.sort();
    for (let i = 0; i < num.length; i++) {
        if (num[i] == num[i + 1]){
              arr.push(num[i])
        }
    }
    return arr
};