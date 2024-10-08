/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
   const number=new Set(nums.filter(a=>a>0).sort((a,b)=>a-b))
    var num=1
    while(number.has(num)){
          num++
    }
    return num
};