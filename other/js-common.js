const isPalindrome = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() //  regex: /[^\w]/g
  // const reversed = cleanedStr.split('').reverse().join('')
  // return cleanedStr === reversed
  let left = 0
  let right = cleanedStr.length - 1
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false
    left++
    right--
  }
  return true
}

// console.log(isPalindrome('Od o'))
// console.log(isPalindrome('Olliu ,;o'))

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  // return str1.split('').sort().join('') === str2.split('').sort().join('')
  const map = {}
  for (const str of str1) {
    let count = (map[str] ?? 0) + 1
    map[str] = count
  }
  for (const str of str2) {
    if (!map[str]) return false
    let count = map[str] - 1
    map[str] = count
  }

  for (value of Object.values(map)) {
    console.log(value)
    if (value !== 0) return false

  }
  return true
}

// console.log(isAnagram('helloo', 'llzheo'))

const fibonacciSeries = (limit) => {
  let ans = [0, 1]
  for (let i = 2; i < limit; i++) {
    ans[i] = ans[i - 1] + ans[i - 2]
  }
  return ans
}

// console.log(fibonacciSeries(12))

const reverseString = (str) => {
  let ans = ''
  const lastIndex = str.length - 1
  for (let i = lastIndex; i >= 0; i--) {
    ans += str[i]
  }
  return ans
}

// console.log(reverseString('Ola'))

const titleCase = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase())
}

// console.log(titleCase('hello john'))

const maxDiff = (arr) => {
  let minValue = arr[0]
  let maxDifference = 0
  const length = arr.length
  for (let i = 1; i < length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else {
      const diff = arr[i] - minValue
      if (diff > maxDifference) {
        maxDifference = diff
      }
    }
  }
  return maxDifference
}

// console.log(maxDiff([1, 2, 3, 4, 8, 345]))

const romanize = (num) => {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let roman = ''
  for (let i of Object.keys(lookup)) {
    const r = Math.floor(num / lookup[i])
    num -= (r * lookup[i])
    roman += i.repeat(r)
  }
  return roman
}

// console.log(romanize(1156))

// print diamond

const printDiamond = (n) => {
  for (let i = 1; i <= n; i++) {
    const star = '* '
    const space = '  '
    console.log(space.repeat(n - i) + star.repeat(2 * i - 1))
  }
  for (let i = n - 1; i > 0; i--) {
    const star = '* '
    const space = '  '
    console.log(space.repeat(n - i) + star.repeat(2 * i - 1))
  }
}

// printDiamond(10)

const isNumberPalindrome = (num) => {
  let reversed = 0
  let temp = num
  while (temp > 0) {
    let lastNumber = temp % 10
    reversed = (reversed * 10) + lastNumber
    temp = Math.floor(temp / 10)
  }
  return reversed === num
}

console.log(isNumberPalindrome(456))
console.log(isNumberPalindrome(2332))