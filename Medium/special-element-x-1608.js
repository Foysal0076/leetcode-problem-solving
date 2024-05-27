/**
 * @param {number[]} nums
 * @return {number}
 */

const specialArray = function (nums) {
  let result = -1
  for (let i = nums.length; i >= 1; i--) {
    let count = 0
    for (const num of nums) {
      if (num >= i) {
        count++
      }
    }
    if (count === i) {
      return i
    }
  }
  return result
}

const test1 = [3, 5]
console.log(specialArray(test1)) //2
const test2 = [0, 0]
console.log(specialArray(test2)) //-1
const test3 = [0, 4, 3, 0, 4]
console.log(specialArray(test3)) //3
const test4 = [3, 6, 7, 7, 0]
console.log(specialArray(test4)) //-1
