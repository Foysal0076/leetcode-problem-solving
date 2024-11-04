/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = new Map()
  const length = nums.length
  for (let i = 0; i < length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return [-1, -1]
}

const test1 = [2, 7, 11, 15] //target 9, ans: []0,1]
const test2 = [3, 2, 4] // target 6, ans:

console.log(twoSum(test1, 9))
console.log(twoSum(test2, 6))