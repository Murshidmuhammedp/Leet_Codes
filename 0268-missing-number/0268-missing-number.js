/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let a =nums.sort((a,b)=>a-b)
    for(let i=0;i<=a.length;i++){
        if(a[i]!=i){
            return i
        }
    }
};