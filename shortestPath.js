/*
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
*/

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

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

const shortestPath = (edges, src, dst) => {
  const graph = convertEdges(edges);
  const visited = new Set([src]);
  const queue = [[src, 0]];

  while(queue.length > 0) {
    const [node, distance] = queue.shift();
    if(node === dst) return distance;
    for(let neighbor of graph[node]) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
}

console.log(shortestPath(edges, 'w', 'z')); // -> 2
