/* This file is for rough practice and tests */

const searchInRotatedSortedArray = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let midIndex = Math.ceil((left + right) / 2)
    if (nums[midIndex] === target) return midIndex
    //left sorted array
    if (nums[left] <= nums[midIndex]) {
      if (target < nums[left] || target > nums[midIndex]) {
        left = midIndex + 1
      } else {
        right = midIndex - 1
      }
    } else { //right sorted array
      if (target < nums[midIndex] || target > nums[right]) {
        right = midIndex - 1
      } else {
        left = midIndex + 1
      }
    }
  }
  return -1
}

const nums1 = [4, 5, 6, 7, 0, 1, 2]
const nums2 = [4, 5, 6, 7, 0, 1, 2]

console.log(searchInRotatedSortedArray(nums1, 0))
console.log(searchInRotatedSortedArray(nums2, 3))
