/*
Write a function, undirectedEdges, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const hasPathGraph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const hasPathDepthFirst = (graph, src, dst, visited) => {
  console.log(visited, src, dst);
  if (src === dst) return true;
  if(visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathDepthFirst(graph, neighbor, dst, visited) === true) {
      return true;
    };
  };
  return false;
};

const hasPathBreadthFirst = (graph, src, dst) => {
  let visited = [];
  const queue = [src];
  visited.push(src);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) {
      return true;
    }
    for (let neighbor of graph[current]) {
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        queue.push(neighbor);
      };
    };
  };
  return false;
};


const convertEdges = (edges) => {
  const graph = {};
  for(const edge of edges) {
    const[a, b] = edge;
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const undirectedEdges = (edges, src, dst) => {
  const graph = convertEdges(edges);
  return hasPathDepthFirst(graph, src, dst, new Set());
};

console.log('\nundirectedEdges: ');
console.log(undirectedEdges(edges, 'i', 'l')); //true

console.log('\nhasPathDepthFirst: ');
console.log(hasPathDepthFirst(hasPathGraph, 'f', 'k', new Set())); //true
console.log(hasPathDepthFirst(hasPathGraph, 'g', 'k', new Set())); //false

console.log('\nhasPathBreadthFirst: ');
console.log(hasPathBreadthFirst(hasPathGraph, 'f', 'k')); //true
console.log(hasPathBreadthFirst(hasPathGraph, 'g', 'k')); //false
