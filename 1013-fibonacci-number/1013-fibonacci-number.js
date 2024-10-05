/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const arr=[0,1]
    for(let i=0;i<n;i++){
        arr.push(arr[i]+arr[i+1])
    }
    return arr[n]
};