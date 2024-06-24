const selectionSort = (nums) => {
  if (nums.length === 0) return []
  const swapNum = (num1Index, num2Index) => {
    nums[num1Index] = nums[num1Index] + nums[num2Index]
    nums[num2Index] = nums[num1Index] - nums[num2Index]
    nums[num1Index] = nums[num1Index] - nums[num2Index]
  }

  const findMinimumIndex = (start, end) => {
    let minIndex = start
    while (start <= end) {
      if (nums[start] < nums[minIndex]) {
        minIndex = start
      }
      start++
    }
    return minIndex
  }

  let i = 0
  const length = nums.length
  while (i < length - 1) {
    const minIndex = findMinimumIndex(i + 1, length - 1)
    if (nums[i] > nums[minIndex]) {
      swapNum(i, minIndex)
    }
    i++
  }
  return nums
}

const test1 = [50]
const test2 = [4, 5, 6, 7, 8, 2, 1]
const test3 = [11, 2, 83, 40, 50, 6, 7, 8, 9]
const test4 = []

console.log(selectionSort(test1))
console.log(selectionSort(test2))
console.log(selectionSort(test3))
console.log(selectionSort(test4))
