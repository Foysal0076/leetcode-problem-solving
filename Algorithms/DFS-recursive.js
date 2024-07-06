const recursiveDFS = (node, res = []) => {
  if (node === null) return null
  res.push(node.value)

  recursiveDFS(node.left, res)
  recursiveDFS(node.right, res)
  return res
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

console.log(recursiveDFS(tree1))
