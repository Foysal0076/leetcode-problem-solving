/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  let res = nums[0]
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[left] <= nums[right]) {
      res = Math.min(nums[left], res)
    }
    res = Math.min(res, nums[mid])
    if (nums[mid] >= nums[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return res
}

const test1 = [3, 4, 5, 1, 2]
const test2 = [4, 5, 6, 7, 0, 1, 2]
const test3 = [11, 13, 15, 17]
const test4 = [7, 0, 1, 2, 3, 4, 5, 6]

console.log(findMin(test1)) // 1
console.log(findMin(test2)) // 0
console.log(findMin(test3)) // 11
console.log(findMin(test4)) // 11
