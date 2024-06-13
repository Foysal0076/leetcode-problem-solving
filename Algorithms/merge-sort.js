const mergeSort = (nums) => {
  const merge = (arr1, arr2) => {
    let left = 0
    let right = 0
    let temp = []
    while (left < arr1.length && right < arr2.length) {
      if (arr1[left] < arr2[right]) {
        temp.push(arr1[left])
        left++
      } else {
        temp.push(arr2[right])
        right++
      }
    }
    // console.log({ temp, arr1, arr2 })
    const res = temp.concat(arr1.slice(left)).concat(arr2.slice(right))
    // console.log({ res })
    return res
  }

  const mergeSortArray = (arr) => {
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSortArray(left), mergeSortArray(right))
  }
  return mergeSortArray(nums)
}

const test1 = [50]
const test2 = [4, 5, 6, 7, 8, 2, 1]
const test3 = [11, 2, 83, 40, 50, 6, 7, 8, 9]
const test4 = []
const test5 = [7, 8, 9, 10, 1, 2, 3, 4]
const test6 = [3, 4, 1, 2]

// console.log(mergeSort(test1))
// console.log(mergeSort(test2))
// console.log(mergeSort(test3))
// console.log(mergeSort(test4))
console.log(mergeSort(test5))
mergeSort(test6)
