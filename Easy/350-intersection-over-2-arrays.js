/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  let nums1Map = new Map()
  let nums2Map = new Map()

  for (const num of nums1) {
    const count = nums1Map.get(num) ? nums1Map.get(num) : 0
    nums1Map.set(num, count + 1)
  }

  for (const num of nums2) {
    const count = nums2Map.get(num) ? nums2Map.get(num) : 0
    nums2Map.set(num, count + 1)
  }

  const ans = []
  for (const [key, value] of nums1Map.entries()) {
    const count = Math.min(nums2Map.get(key) ? nums2Map.get(key) : 0, value)
    for (let i = 0; i < count; i++) {
      ans.push(key)
    }
  }
  return ans
}

const n1 = [1, 2, 2, 1]
const n2 = [2, 2]

const n3 = [1, 2, 2, 1]
const n4 = [2]

console.log(intersect(n1, n2))
console.log(intersect(n3, n4))
