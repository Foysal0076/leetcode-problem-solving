const isSameTree = (p, q) => {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null || p.value !== q.value) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

class Node {
  constructor(value) {
    this.value = value ? value : 0
    this.left = null
    this.right = null
  }
}

const tree1 = new Node(1)
tree1.left = new Node(2)
tree1.right = new Node(3)
tree1.left.left = new Node(4)
tree1.left.right = new Node(5)

const tree2 = new Node(1)
tree2.left = new Node(2)
tree2.right = new Node(3)
tree2.left.left = new Node(4)
tree2.left.right = new Node(5)

const tree3 = new Node(1)
tree3.left = new Node(2)
tree3.right = new Node(3)
tree3.left.left = new Node(4)
tree3.left.right = new Node(7)

console.log(isSameTree(tree1, tree2))
console.log(isSameTree(tree1, tree3))
