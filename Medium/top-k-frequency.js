/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {}

  for (let elem of nums) {
    obj[elem] = (obj[elem] || 0) + 1
  }

  let freq = Object.entries(obj)
  console.log(freq)
  freq = freq.sort((a, b) => b[1] - a[1])

  //   console.log(freq);

  let ans = []

  for (let i = 0; i < k; i++) {
    ans.push(freq[i][0])
  }

  return ans
}

const test1 = [1, 1, 1, 2, 2, 3]
const test2 = [1]
console.log(topKFrequent(test1, 2)) // [1, 2]
console.log(topKFrequent(test2, 1)) // [1]
