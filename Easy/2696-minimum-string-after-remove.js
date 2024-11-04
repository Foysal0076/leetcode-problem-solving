/**
 * @param {string} s
 * @return {number}
 */

var minLength = function (s) {
  // while (s.includes('AB') || s.includes('CD')) {
  //   s = s.replace('AB', '')
  //   s = s.replace('CD', '')
  // }

  // return s.length

  // let left = 0
  // let right = 1

  // while (left <= right) {
  //   if ((s[left] === 'A' && s[right] === 'B') || (s[left] === 'C' && s[right] === 'D')) {
  //     s = s.slice(0, left) + s.slice(right + 1, s.length)
  //     left--
  //     right--
  //   } else {
  //     left++
  //     if (right < s.length - 1) {
  //       right++
  //     }
  //   }
  // }

  // return s.length

  let stack = []

  for (let char of s) {
    if (stack.length > 0 && ((stack[stack.length - 1] === 'A' && char === 'B') || (stack[stack.length - 1] === 'C' && char === 'D'))) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.length
}

const test1 = 'ABFCACDB' // 2
const test2 = 'ACBBD' // 5

console.log(minLength(test1))
console.log(minLength(test2))