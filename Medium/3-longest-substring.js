/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // let left = 0, right = 0, temp = new Set(), maxLength = 0

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

  let map = new Map()
  let left = 0
  let right = 0
  let maxLength = 0

  while (right < s.length) {
    const index = map.get(s[right])
    if (index !== undefined && index >= left) {
      left = index + 1
    }
    maxLength = Math.max(maxLength, right - left + 1)
    map.set(s[right], right)
    right++
  }
  return maxLength

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
