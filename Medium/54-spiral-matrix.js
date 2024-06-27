const spiralMatrix = (A) => {
  let ans = []
  let prev = 'right'
  let left = 0
  let right = 0
  if (A[0][0] === undefined) {
    return A
  }
  while (true) {
    if (typeof A[left][right] === 'number') {
      ans.push(A[left][right])
      A[left][right] = null
    } else {
      break
    }
    if (prev === 'right') {
      if (A[left][right + 1]) {
        right += 1
      } else if (A[left + 1] && typeof A[left + 1][right] === 'number') {
        prev = 'down'
        left += 1
      } else {
        break
      }
    } else if (prev === 'left') {
      if (A[left][right - 1]) {
        right -= 1
      } else if (typeof A[left - 1][right] === 'number') {
        prev = 'top'
        left -= 1
      } else {
        break
      }
    } else if (prev === 'down') {
      if (A[left + 1] && typeof A[left + 1][right] === 'number') {
        left += 1
      } else if (typeof A[left][right - 1] === 'number') {
        prev = 'left'
        right -= 1
      } else {
        break
      }
    } else if (prev === 'top') {
      if (A[left - 1] && typeof A[left - 1][right] === 'number') {
        left -= 1
      } else if (typeof A[left][right + 1] === 'number') {
        prev = 'right'
        right += 1
      } else {
        break
      }
    }
  }
  return ans
}

const spiralMatrixSimple = (nums) => {
  let ans = []
  let left = (top = 0)
  let right = nums[0].length - 1
  let bottom = nums.length - 1

  while (left <= right && top <= bottom) {
    //push a row to the ans array
    for (let i = left; i <= right; i++) {
      ans.push(nums[top][i])
    }

    //push rightmost column to the array except the previous row's last element
    top++
    for (let i = top; i <= bottom; i++) {
      ans.push(nums[i][right])
    }

    // shift right to one index left and push right to left elements in the ans array
    right--

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(nums[bottom][i])
      }
      bottom--
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(nums[i][left])
      }
      left++
    }
  }
  return ans
}

const test1 = [1]
const test2 = [[1, 2]]
const test3 = [1, 2, 3, 4, 5, 6]
const test4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const test5 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
]

console.log(spiralMatrixSimple(test1))
console.log(spiralMatrixSimple(test2))
console.log(spiralMatrixSimple(test3))
console.log(spiralMatrixSimple(test4))
console.log(spiralMatrixSimple(test5))
