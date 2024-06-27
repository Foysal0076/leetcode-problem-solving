// // This is for rough
// function performOps(A) {
//   let tempSubArray = []
//   let maxSubArray = []
//   let maxSum = 0
//   let tempSum = 0

//   const replaceMax = () => {
//     maxSubArray = [...tempSubArray]
//     maxSum = tempSum
//     tempSum = 0
//     tempSubArray = []
//   }

//   const breakTie = () => {
//     if (maxSubArray.length < tempSubArray.length) {
//       replaceMax()
//     }
//   }

//   for (let i = 0; i < A.length; i++) {
//     if (A[i] >= 0) {
//       tempSum += A[i]
//       tempSubArray.push(A[i])
//     } else {
//       if (tempSum === maxSum) {
//         breakTie()
//       } else if (tempSum > maxSum) {
//         replaceMax()
//       } else {
//         tempSum = 0
//         tempSubArray = []
//       }
//     }
//   }

//   if (tempSum === maxSum) {
//     breakTie()
//   } else if (tempSum > maxSum) {
//     replaceMax()
//   }

//   return maxSubArray
// }

// const test1 = [1, 2, 5, -5, 2, 5, 2, 2]
// const test2 = [1, 2, 5, -5, 1, 1, 2, 4]
// const test3 = [1, 2, 5, -5, 1, 1, 6]
// const test4 = [1967513926, 1540383426, -1303455736, -521595368]

// console.log(performOps(test1))
// console.log(performOps(test2))
// console.log(performOps(test3))
// console.log(performOps(test4))
