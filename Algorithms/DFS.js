const dfs = (graph, node) => {
  const visited = new Set()
  const stack = [node]

  while (stack.length > 0) {
    const v = stack.pop()
    if (!visited.has(v)) {
      visited.add(v)
      let neighbors = graph[v]
      for (const neighbor of neighbors) {
        stack.push(neighbor)
      }
    }
  }
  return visited
}

const graph1 = {
  A: ['B', 'G'],
  B: ['C', 'D', 'E'],
  C: [],
  D: [],
  E: ['F'],
  F: [],
  G: ['H'],
  H: ['I'],
  I: [],
}

console.log(dfs(graph1, 'A'))
