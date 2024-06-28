/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const minWindow = function (s, t) {
  if (s.length === 0) return ''

  let left = 0
  let haveMap = new Map()
  let needMap = new Map()
  let ans = ''

  let totalHave = 0
  let totalNeed = 0

  for (const char of t) {
    needMap.set(char, needMap.get(char) ? needMap.get(char) + 1 : 1)
    haveMap.set(char, 0)
    totalNeed++
  }

  for (const [index, element] of Array.from(s).entries()) {
    if (needMap.get(element) && totalHave !== totalNeed) {
      haveMap.set(element, haveMap.get(element) + 1)
      if (haveMap.get(element) <= needMap.get(element)) {
        totalHave++
      }
    }
    while (totalHave === totalNeed) {
      const tempAns = s.slice(left, index + 1)
      if (ans === '') {
        ans = tempAns
      } else {
        ans = tempAns.length < ans.length ? tempAns : ans
      }
      if (haveMap.get(s[left])) {
        if (haveMap.get(s[left]) <= needMap.get(s[left])) {
          totalHave--
        }
        haveMap.set(s[left], haveMap.get(s[left]) - 1)
      }
      left++
    }
  }

  return ans
}

const test1 = 'ADOBECODEBANC'
const test2 = 'a'
const test3 = 'a'

console.log(minWindow(test1, 'ABC')) //BANC
// console.log(minWindow(test2, 'a')) //a
// console.log(minWindow(test3, 'aa')) //''
