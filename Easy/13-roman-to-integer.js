/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  // const lookup = {
  //   M: 1000,
  //   CM: 900,
  //   D: 500,
  //   CD: 400,
  //   C: 100,
  //   XC: 90,
  //   L: 50,
  //   XL: 40,
  //   X: 10,
  //   IX: 9,
  //   V: 5,
  //   IV: 4,
  //   I: 1
  // }

  let result = 0
  const length = s.length

  for (let i = 0; i < length - 1; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]]
    } else {
      result += map[s[i]]
    }
  }

  return result += map[s.at(-1)]
}

const romanToIntAlt = (s) => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let total = 0
  s = s.replace('IV', 'IIII')
  s = s.replace('IX', 'VIIII')
  s = s.replace('XL', 'XXXX')
  s = s.replace('XC', 'LXXXX')
  s = s.replace('CD', 'CCCC')
  s = s.replace('CM', 'DCCCC')

  for (const char of s) {
    total += map[char]
  }

  return total
}

// Test cases
console.log(romanToInt("III")) // Output: 3
console.log(romanToInt("IV")) // Output: 4
console.log(romanToInt("IX")) // Output: 9
console.log(romanToInt("LVIII")) // Output: 58
console.log(romanToInt("MCMXCIV")) // Output: 1994
console.log(romanToInt("MMXXIII")) // Output: 2023
console.log(romanToInt("CDXLIV")) // Output: 444

// Test cases
console.log(romanToIntAlt("III")) // Output: 3
console.log(romanToIntAlt("IV")) // Output: 4
console.log(romanToIntAlt("IX")) // Output: 9
console.log(romanToIntAlt("LVIII")) // Output: 58
console.log(romanToIntAlt("MCMXCIV")) // Output: 1994
console.log(romanToIntAlt("MMXXIII")) // Output: 2023
console.log(romanToIntAlt("CDXLIV")) // Output: 444