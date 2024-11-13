/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closeToOpen = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const stack = []
  for (const char of s) {
    if (closeToOpen[char]) {
      if (stack.at(-1) === closeToOpen[char]) {
        stack.pop()
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0

}

console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) //false
console.log(isValid("([])")) //true