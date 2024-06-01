/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // let temp = new Set()
  // let left = 0
  // let right = 0
  // let maxLength = 0

  // while (right < s.length) {
  //   if (temp.has(s[right])) {
  //     while (temp.has(s[right])) {
  //       temp.delete(s[left])
  //       left++
  //     }
  //     temp.add(s[right])
  //   } else {
  //     temp.add(s[right])
  //     maxLength = Math.max(maxLength, right - left + 1)
  //   }

  //   right++
  // }
  // return maxLength

  let i = 0
  let res = 0
  const map = new Map()

  for (let j = 0; j < s.length; j++) {
    const index = map.get(s[j])
    if (index !== undefined && index >= i) {
      i = index + 1
    }
    res = Math.max(res, j - i + 1)
    map.set(s[j], j)
  }

  return res
}

const test1 = 'abcabcbb'
const test2 = 'bbbbb'
const test3 = 'pwwkew'
const test4 = ''
const test5 = ' '
console.log(lengthOfLongestSubstring(test1)) // 3
console.log(lengthOfLongestSubstring(test2)) // 1
console.log(lengthOfLongestSubstring(test3)) // 3
console.log(lengthOfLongestSubstring(test4)) // 0
console.log(lengthOfLongestSubstring(test5)) // 1
