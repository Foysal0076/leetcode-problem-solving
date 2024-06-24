const bubbleSort = (nums) => {
  const swapNum = (num1Index, num2Index) => {
    nums[num1Index] = nums[num1Index] + nums[num2Index]
    nums[num2Index] = nums[num1Index] - nums[num2Index]
    nums[num1Index] = nums[num1Index] - nums[num2Index]
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swapNum(j, j + 1)
      }
    }
  }
  return nums
}

const test1 = [50]
const test2 = [4, 5, 6, 7, 8, 2, 1]
const test3 = [11, 2, 83, 40, 50, 6, 7, 8, 9]
const test4 = []

console.log(bubbleSort(test1))
console.log(bubbleSort(test2))
console.log(bubbleSort(test3))
console.log(bubbleSort(test4))
