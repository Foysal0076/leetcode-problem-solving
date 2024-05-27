/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  //Brute Force
  // let max = 0
  // for (let i = 0; i < height.length - 1; i++) {
  //   for (j = i + 1; j < height.length; j++) {
  //     const h = Math.min(height[i], height[j])
  //     const w = j - i
  //     max = Math.max(max, h * w)
  //   }
  // }
  // return max

  let maxArea = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    )
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  return maxArea
}

const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(test1)) // 49

const test2 = [1, 1]
console.log(maxArea(test2)) // 1
