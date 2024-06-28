/**
 * @param {number[]} nums
 * @return {number}
 */

var find = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2)
  //   if (nums[left] <= nums[mid]) {
  //     if (target < nums[mid]) {
  //       if (target < nums[left]) {
  //         left = mid + 1
  //       } else {
  //         right = mid - 1
  //       }
  //     } else if (target > nums[mid]) {
  //       left = mid + 1
  //     } else if (target === nums[mid]) {
  //       return mid
  //     } else {
  //       left = mid + 1
  //     }
  //   } else if (nums[left] >= nums[mid]) {
  //     if (target === nums[mid]) {
  //       return mid
  //     } else if (target < nums[mid] || target >= nums[left]) {
  //       right = mid - 1
  //     } else if (target < nums[left]) {
  //       left = mid + 1
  //     }
  //   }
  // }

  while (left <= right) {
    let mid = Math.ceil((left + right) / 2)
    if (nums[mid] === target) return mid

    if (nums[left] <= nums[mid]) {
      if (target < nums[left] || target > nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}

const test1 = [3, 4, 5, 1, 2]
const test2 = [4, 5, 6, 7, 0, 1, 2]
const test3 = [11, 13, 15, 17]
const test4 = [7, 0, 1, 2, 3, 4, 5, 6]

// console.log(find(test1, 1)) // 3
// console.log(find(test2, 1)) // 5
// console.log(find(test3, 11)) // 0
console.log(find(test4, 4)) // -1
