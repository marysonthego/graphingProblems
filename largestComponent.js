/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
*/

const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}// 4

const exploreSize = (graph, node, visited) => {
  if(visited.has(node)) return 0;

  visited.add(node);
  let size = 1;
  for(let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
};

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if(size > longest) longest = size;
  }
  return longest;
};

console.log('\nlargestComponent: 4 ' + largestComponent(graph));

