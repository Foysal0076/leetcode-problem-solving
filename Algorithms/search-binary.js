const binarySearch = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  let iteration = 0
  while (left <= right) {
    iteration++
    let midIndex = Math.floor((right + left) / 2)
    if (target > nums[midIndex]) {
      left = midIndex + 1
    } else if (target < nums[midIndex]) {
      right = midIndex - 1
    } else if (target === nums[midIndex]) {
      return { index: midIndex, iteration }
    }
  }
  return -1
}

const inputs = [1, 3, 5, 6, 7, 8, 9, 12, 23, 45, 56, 67, 78, 89, 90, 99]
// console.log(binarySearch(inputs, 23)) // 1 iteration
// console.log(binarySearch(inputs, 7)) // 2 iteration
// console.log(binarySearch(inputs, 99)) // 4 iteration
console.log(binarySearch(inputs, 100)) // 5 iteration , (-1 not found)
