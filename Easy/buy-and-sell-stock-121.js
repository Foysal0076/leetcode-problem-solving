/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  //Brute force
  // let profit = 0
  // for (let i = 0; i < prices.length - 1; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     profit = Math.max(profit, prices[j] - prices[i])
  //   }
  // }
  // return profit

  //* Efficient , Sliding window technique
  let profit = 0
  let left = 0
  let right = 1

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = Math.max(profit, prices[right] - prices[left])
    } else {
      left++
    }
    right++
  }
  return profit
}

const test1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(test1)) // 5

const test2 = [7, 6, 4, 3, 1]
console.log(maxProfit(test2)) // 2

const test3 = [7, 1, 5, 200, 4, 6, 4]
console.log(maxProfit(test3)) // 199

const test4 = [1, 2]
console.log(maxProfit(test4)) // 1

const test5 = [2, 1, 2, 1, 0, 1, 2]
console.log(maxProfit(test5)) // 2
