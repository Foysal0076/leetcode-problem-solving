const bfs = (graph, node) => {
  const visited = []
  const queue = []

  visited.push(node)
  queue.push(node)

  while (queue.length > 0) {
    const v = queue.shift()
    for (const el of graph[v]) {
      if (!visited.includes(el)) {
        visited.push(el)
        queue.push(el)
      }
    }
  }
  return visited
}

const graph1 = {
  A: ['B', 'C'],
  B: ['D', 'E', 'F'],
  C: ['G'],
  D: [],
  E: [],
  F: ['H'],
  G: ['I'],
  H: [],
  I: [],
}

console.log(bfs(graph1, 'A'))
