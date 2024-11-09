/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  // const isAlphaNum = (char) => {
  //   return (
  //     (char.charCodeAt(0) >= 'A'.charCodeAt(0) &&
  //       char.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
  //     (char.charCodeAt(0) >= 'a'.charCodeAt(0) &&
  //       char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
  //     (char.charCodeAt(0) >= '0'.charCodeAt(0) &&
  //       char.charCodeAt(0) <= '9'.charCodeAt(0))
  //   )
  // }
  // function isAlphaNumeric(str) {
  //   return /^[a-zA-Z0-9]+$/.test(str)
  // }

  // let left = 0,
  //   right = s.length - 1
  // while (left < right) {
  //   while (left < right && !isAlphaNum(s[left])) {
  //     left++
  //   }

  //   while (left < right && !isAlphaNum(s[right])) {
  //     right--
  //   }

  //   if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
  //   left++
  //   right--
  // }
  // return true

  const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let left = 0, right = cleanedStr.length - 1

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false
    left++
    right--
  }
  return true
}

const test1 = 'A man, a plan, a canal: Panama'
const test2 = 'odo'
console.log(isPalindrome(test1))
console.log(isPalindrome(test2))
