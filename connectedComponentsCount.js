/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

const graph1 ={
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}//2

const graph2 = {
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}//1

const graph3 = {
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}//5

const exploreRecursive = (graph, current, visited) => {
  if(visited.has(String(current))) return false;
  visited.add(String(current));

    for(let neighbor of graph[current]) {
      exploreRecursive(graph, neighbor, visited);
    }
  return true;
  };

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for(let node of Object.keys(graph)) {
    console.log('visited: ', visited);
    if(exploreRecursive(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};

console.log('\ngraph1: 2 ' + connectedComponentsCount(graph1));
console.log('\ngraph2: 1 ' + connectedComponentsCount(graph2));
console.log('\ngraph3: 5 ' + connectedComponentsCount(graph3));
