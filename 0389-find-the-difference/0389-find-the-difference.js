/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const a = s.concat(t).split('').sort().join('')
    for(let i=0;i<a.length;i+=2){
        if(a[i]!=a[i+1]){
            return a[i]
        }
    }
};