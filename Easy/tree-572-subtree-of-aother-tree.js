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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true
  if (!root) return false
  if (isSameTree(root, subRoot)) return true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSameTree(p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q || p.val !== q.val) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

class Node {
  constructor(val) {
    this.val = val ? val : 0
    this.left = null
    this.right = null
  }
}

const tree1 = new Node(1)
tree1.left = new Node(2)
tree1.right = new Node(3)
tree1.left.left = new Node(4)
tree1.left.right = new Node(5)

const subTree1 = new Node(10)
subTree1.left = new Node(4)
subTree1.right = new Node(5)

console.log(isSubtree(tree1, subTree1))
