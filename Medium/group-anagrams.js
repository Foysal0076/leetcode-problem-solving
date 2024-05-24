/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = new Map()

  for (const str of strs) {
    const count = new Array(26).fill(0)
    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    const key = count.join(',')

    const prevValue = result.get(key) ?? []
    prevValue.push(str)
    result.set(key, prevValue)
  }

  return Array.from(result.values())
}

const test1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
const test2 = ['bdddddddddd', 'bbbbbbbbbbc']
console.log(groupAnagrams(test2)) // [["bat"],["nat","tan"],["ate","eat","tea"]]
