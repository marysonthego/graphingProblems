
const main = () => {

  const hasPathGraph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  }

  const dijkstraGraph = {
    a: [{vertex: 'a', weight: 0},
        {vertex: 'b', weight: 4},
        {vertex: 'c', weight: 3},
        {vertex: 'e', weight: 7}],
    b: [{vertex: 'a', weight: 4},
        {vertex: 'b', weight: 0},
        {vertex: 'c', weight: 6},
        {vertex: 'd', weight: 5}],
    c: [{vertex: 'a', weight: 3},
        {vertex: 'b', weight: 6},
        {vertex: 'c', weight: 0},
        {vertex: 'd', weight: 11},
        {vertex: 'e', weight: 8}],
    d: [{vertex: 'b', weight: 5},
        {vertex: 'c', weight: 11},
        {vertex: 'd', weight: 0},
        {vertex: 'e', weight: 2},
        {vertex: 'f', weight: 2},
        {vertex: 'g', weight: 10}],
    e: [{vertex: 'a', weight: 7},
        {vertex: 'c', weight: 8},
        {vertex: 'd', weight: 2},
        {vertex: 'e', weight: 0},
        {vertex: 'g', weight: 5}],
    f: [{vertex: 'd', weight: 2},
        {vertex: 'f', weight: 0},
        {vertex: 'g', weight: 3}],
    g: [{vertex: 'd', weight: 10},
        {vertex: 'e', weight: 5},
        {vertex: 'f', weight: 3},
        {vertex: 'g', weight: 0}]
  }

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


  const goal = 'f';
  let visited = [];

  //pop and push
  const depthFirstStack = (graph, initial) => {
    const stack = [initial];
    visited.push(initial);

    while (stack.length > 0) {
      const vertex = stack.pop();

      for(const neighbor of graph[vertex]) {
        if (!visited.includes(neighbor)) {
          visited.push(neighbor);
          stack.push(neighbor);
        };
      };
    };
    console.log('visited: ', visited + '\n');
  };

  const recursiveDepthFirst = (graph, initial) => {
    if(initial === goal) {
      console.log('found goal: ' + goal + ' visited: ' + visited + '\n');
    }
      for(const neighbor of graph[initial]) {
        if (!visited.includes(goal) && !visited.includes(neighbor)) {
          visited.push(neighbor);
          recursiveDepthFirst(graph, neighbor);
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

  const dijkstraShortestPath = (graph, current) => {
    visited.push(current);
    console.log('visited: ', JSON.stringify(visited));
    const unvisited = graph[current.vertex];
    unvisited.sort((a, b) => a.weight - b.weight);

    for(const neighbor of unvisited) {
      neighbor.weight += current.weight;
    }
    console.log('unvisited: ', JSON.stringify(unvisited));
  };

  const hasPathDepthFirst = (graph, src, dst, isVisited) => {
    console.log(isVisited, src, dst);
    if (src === dst) return true;
    if(isVisited.has(src)) return false;
    isVisited.add(src);

    for (let neighbor of graph[src]) {
      if (hasPathDepthFirst(graph, neighbor, dst, isVisited) === true) {
        return true;
      };
    };
    return false;
  };

  const hasPathBreadthFirst = (graph, src, dst) => {
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
  /*
  Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
  */
  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
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
    //console.log('graph: ', JSON.stringify(graph));
    return graph;
  };

  const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = convertEdges(edges);
    return hasPathDepthFirst(graph, nodeA, nodeB, new Set());
  };

  visited = [];
  console.log('\n directedGraph depthFirstStack: ');
  depthFirstStack(directedGraph, 'a');
  visited = ['a'];
  console.log('\n directedGraph recursiveDepthFirst: ');
  recursiveDepthFirst(directedGraph, 'a');
  visited = [];
  console.log('\n directedGraph breadthFirstQueue: ');
  breadthFirstQueue(directedGraph, 'a');
  visited = [];
  console.log('\n unDirectedGraph depthFirstStack: ');
  depthFirstStack(unDirectedGraph, 'a');
  visited = ['a'];
  console.log('\n unDirectedGraph recursiveDepthFirst: ');
  recursiveDepthFirst(unDirectedGraph, 'a');
  visited = [];
  console.log('\n unDirectedGraph breadthFirstQueue: ');
  breadthFirstQueue(unDirectedGraph, 'a');
  visited = [];
  console.log('\n dijkstraShortestPath: ');
  dijkstraShortestPath(dijkstraGraph, {vertex: 'a', weight: 0});
  // console.log('\nhasPathDepthFirst: ');
  // console.log(hasPathDepthFirst(hasPathGraph, 'f', 'k')); //true
  // console.log(hasPathDepthFirst(hasPathGraph, 'g', 'k')); //false
  // visited = [];
  // console.log('\nhasPathBreadthFirst: ');
  // console.log(hasPathBreadthFirst(hasPathGraph, 'f', 'k')); //true
  // visited = [];
  // console.log(hasPathBreadthFirst(hasPathGraph, 'g', 'k')); //false
  console.log('\nundirectedPath: ');
  console.log(undirectedPath(edges, 'i', 'l')); //true
}
  main();
