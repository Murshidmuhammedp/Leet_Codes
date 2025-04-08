/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    var num=0
    var num1=0
    for(i=0;i<nums.length;i++){
       if(nums[i]<10){
            num += nums[i]
       }else{
            num1 +=nums[i]
       }
    }
    return num!==num1
};