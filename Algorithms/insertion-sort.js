const insertionSort = (nums) => {
  if (nums.length <= 1) return nums
  for (let i = 1; i < nums.length; i++) {
    let left = i - 1
    let current = i
    while (nums[current] < nums[left] && left >= 0) {
      // swap number
      nums[left] = nums[left] + nums[current]
      nums[current] = nums[left] - nums[current]
      nums[left] = nums[left] - nums[current]
      left--
      current--
    }
  }
  return nums
}

const test1 = [50]
const test2 = [4, 5, 6, 7, 8, 2, 1]
const test3 = [11, 2, 83, 40, 50, 6, 7, 8, 9]
const test4 = []

console.log(insertionSort(test1))
console.log(insertionSort(test2))
console.log(insertionSort(test3))
console.log(insertionSort(test4))
