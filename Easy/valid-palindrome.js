/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const isAlphaNum = (char) => {
    return (
      (char.charCodeAt(0) >= 'A'.charCodeAt(0) &&
        char.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
      (char.charCodeAt(0) >= 'a'.charCodeAt(0) &&
        char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
      (char.charCodeAt(0) >= '0'.charCodeAt(0) &&
        char.charCodeAt(0) <= '9'.charCodeAt(0))
    )
  }
  function isAlphaNumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str)
  }

  let left = 0,
    right = s.length - 1
  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) {
      left++
    }

    while (left < right && !isAlphaNum(s[right])) {
      right--
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left++
    right--
  }
  return true
}

const test1 = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(test1))
