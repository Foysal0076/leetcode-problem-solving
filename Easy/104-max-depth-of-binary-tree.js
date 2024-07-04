/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  // return 1+ Math.max(maxDepth(root.left), maxDepth(root.right)) // recursion solution

  // BFS solution
  // let level = 0
  // let queue = [root]

  // while (queue.length > 0) {
  //     const length = queue.length
  //     for (let i = 0; i < length; i++) {
  //         const current = queue.shift()
  //         if (current.left) {
  //             queue.push(current.left)
  //         }
  //         if (current.right) {
  //             queue.push(current.right)
  //         }
  //     }
  //     level++
  // }
  // return level

  // DFS Solution
  let stack = [[root, 1]]
  let res = 1

  while (stack.length > 0) {
    const [node, depth] = stack.pop()
    if (node) {
      res = Math.max(res, depth)
      stack.push([node.left, depth + 1])
      stack.push([node.right, depth + 1])
    }
  }
  return res
}
