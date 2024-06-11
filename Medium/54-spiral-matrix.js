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

console.log(spiralMatrix(test1))
console.log(spiralMatrix(test2))
console.log(spiralMatrix(test3))
console.log(spiralMatrix(test4))
console.log(spiralMatrix(test5))
