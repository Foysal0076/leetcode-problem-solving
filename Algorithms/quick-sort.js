const quickSort = (nums) => {
  if (nums.length < 2) return nums
  const pivot = nums[nums.length - 1]
  const left = []
  const right = []
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  const res = [...quickSort(left), pivot, ...quickSort(right)]
  return res
}

const test1 = [50]
const test2 = [4, 5, 3, 7, 6, 2, 1]
const test3 = [5, 2, 1, 4, 0, 3, 6, 8, 7, 4, -1]
const test4 = []

console.log(quickSort(test1))
console.log(quickSort(test2))
console.log(quickSort(test3))
console.log(quickSort(test4))
