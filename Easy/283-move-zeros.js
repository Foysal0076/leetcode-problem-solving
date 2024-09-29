/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const swap = (left, right) => {
    nums[left] = nums[left] + nums[right]
    nums[right] = nums[left] - nums[right]
    nums[left] = nums[left] - nums[right]
  }

  let left = 0, right = 0, length = nums.length

  while (left < right && nums[left] !== 0) {
    left++
    right++
  }

  while (left <= right && right < length) {
    if (nums[left] === 0 && nums[right] !== 0) {
      swap(left, right)
    }

    while (nums[left] !== 0 && left <= right) {
      left++
    }

    while (nums[right] === 0 && right < length) {
      right++
    }
  }
  return nums
}

const test1 = [0, 1, 0, 3, 12]
const test2 = [0]

console.log(moveZeroes(test1))
console.log(moveZeroes(test2))