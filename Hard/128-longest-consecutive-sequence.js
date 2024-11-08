/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const numSet = new Set([...nums])
  let maxLength = 0
  for (const num of nums) {
    let length = 0
    if (!numSet.has(num - 1)) {
      // start of the sequence
      while (numSet.has(num + length)) {
        length += 1
      }
      maxLength = Math.max(maxLength, length)
    }
  }
  return maxLength
}

const test1 = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(test1))
