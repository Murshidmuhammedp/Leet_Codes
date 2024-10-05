/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a,b)=>a-b)
    const l = arr.length
    return l % 2 == 0 ? (arr[l / 2] + arr[l / 2 - 1]) / 2 : arr[l / 2 - .5]
};