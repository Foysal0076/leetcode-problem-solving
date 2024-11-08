'use strict'
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = []
  let prefix = 1, postfix = 1

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix
    postfix *= nums[i]
  }

  return result
}
const test1 = [1, 2, 3, 4]
const test2 = [-1, 1, 0, -3, 3]

console.log(productExceptSelf(test1)) // [ 24, 12, 8, 6 ]
console.log(productExceptSelf(test2)) //[ -0, 0, 9, -0, 0 ]