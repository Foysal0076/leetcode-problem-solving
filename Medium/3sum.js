/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  const res = []

  let index = 0

  nums.sort((a, b) => a - b)
  while (index < nums.length) {
    if (index > 0 && nums[index] === nums[index - 1]) {
      index++
      continue
    }
    let left = index + 1
    let right = nums.length - 1

    while (left < right) {
      if (nums[index] + nums[left] + nums[right] > 0) {
        right--
      } else if (nums[index] + nums[left] + nums[right] < 0) {
        left++
      } else {
        res.push([nums[index], nums[left], nums[right]])
        left++
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      }
    }

    index++
  }
  return res
}

const test1 = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(test1)) // [[-1, -1, 2], [-1, 0, 1]]

const test2 = []
console.log(threeSum(test2)) // []
