// Leetcode 271. Encode and Decode Strings

const encode = (strs) => {
  let result = ''
  for (const str of strs) {
    result += str.length.toString() + '#' + str
  }
  return result
}

const decode = (str) => {
  let i = 0,
    res = []
  while (i < str.length) {
    let j = i

    while (str[j] !== '#') {
      j += 1
    }
    let count = parseInt(str.slice(i, j))
    res.push(str.slice(j + 1, j + 1 + count))
    i = j + 1 + count
  }
  return res
}

const test1 = ['leet', 'code']
console.log('Encoded:', encode(test1)) // "4#leet4#code"
console.log('Decoded', decode(encode(test1))) // ["leet","code"]

const test2 = ['4#leet', '4#code']
console.log('Encoded:', encode(test2)) // "4#4#leet4#4#code"
console.log('Decoded', decode(encode(test2))) // ["4#leet","4#code"]
