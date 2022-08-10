const directedGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

const unDirectedGraph = {
  a: ['c', 'b'],
  b: ['d', 'a'],
  c: ['e', 'a'],
  d: ['f', 'b'],
  e: ['f', 'c'],
  f: ['d', 'e']
};

//pop and push
const depthFirstStack = (graph, initial) => {
  const stack = [initial];
  visited.push(initial);
  if(initial === goal) {
    console.log('found goal: ' + goal + ' visited: ' + visited + '\n');
  }

  while (stack.length > 0) {
    const vertex = stack.pop();

    for(const neighbor of graph[vertex]) {
      if (!visited.includes(goal) && !visited.includes(neighbor)) {
        visited.push(neighbor);
        stack.push(neighbor);
      };
    };
  };
  console.log('visited: ', visited + '\n');
};

const depthFirstRecursive = (graph, initial) => {
  if(initial === goal) {
    console.log('found goal: ' + goal + ' visited: ' + visited + '\n');
  }
    for(const neighbor of graph[initial]) {
      if (!visited.includes(goal) && !visited.includes(neighbor)) {
        visited.push(neighbor);
        depthFirstRecursive(graph, neighbor);
    };
  };
};

//shift and push
const breadthFirstQueue = (graph, initial) => {
  const queue = [initial];
  visited.push(initial);

  while (queue.length > 0) {
    const vertex = queue.shift();

    for(const neighbor of graph[vertex]) {
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        queue.push(neighbor);
      };
    };
  };
  console.log('visited: ', visited);
};

const goal = 'f';
let visited = [];
  console.log('\n directedGraph depthFirstStack: ');
  depthFirstStack(directedGraph, 'a');

  visited = ['a'];
  console.log('\n directedGraph recursiveDepthFirst: ');
  depthFirstRecursive(directedGraph, 'a');

  visited = [];
  console.log('\n directedGraph breadthFirstQueue: ');
  breadthFirstQueue(directedGraph, 'a');

  visited = [];
  console.log('\n unDirectedGraph depthFirstStack: ');
  depthFirstStack(unDirectedGraph, 'a');

  visited = ['a'];
  console.log('\n unDirectedGraph recursiveDepthFirst: ');
  depthFirstRecursive(unDirectedGraph, 'a');

  visited = [];
  console.log('\n unDirectedGraph breadthFirstQueue: ');
  breadthFirstQueue(unDirectedGraph, 'a');
