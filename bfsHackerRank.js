/*
Consider an undirected graph consisting of n nodes where each node is labeled from 1 to n and the edge between any two nodes is always of length 6. We define node s to be the starting position for a BFS. Given a graph, determine the distances from the start node to each of its descendants and return the list in node number order, ascending. If a node is disconnected, it's distance should be -1.

For example, there are n - 6 nodes in the graph with a starting node s - 1. The list of
edges = [[1,2], [2,3]. [3,4], [1,5]]
, and each has a weight of 6.


Starting from node 1 and creating a list of distances, for nodes 2 through 6 we have

distances = [6, 12, 18, 6, -1]

Function Description

Define a Graph class with the required methods to return a list of distances.

Input Format

The first line contains an integer, q , the number of queries.

Each of the following q sets of lines is as follows:

The first line contains two space-separated integers, n and m, the number of nodes and the number of edges.
Each of the next m lines contains two space-separated integers, u and v, describing an edge connecting node u to node v.
The last line contains a single integer, s , the index of the starting node.
Constraints
 1 < q <10
 2 <= n <= 1000
 1 <= m <= n*(n-1)/2
 1 < u,v,s < n

Sample Input

2 # of queries

4 2 # of nodes n and edges m
1 2 edge connecting u and v
1 3 edge connecting u and v
1 index of starting node s

3 1 # of nodes n and edges m
2 3 edge connecting u and v
2 index of starting node s


Output Format

For each of the q queries, print a single line of  n - 1 space-separated integers denoting the shortest distances to each of the n - 1 other nodes from starting position s. These distances should be listed sequentially by node number (i.e., 1,2,...,n), but should not include node s. If some node is unreachable from s, print -1 as the distance to that node.


Sample Output

6 6 -1
-1 6
*/
function processData(input) {
  //Enter your code here
  //console.log('input : ', input);
  /*
  input :  [
  '2',   '4 2', '1 2',
  '1 3', '1',   '3 1',
  '2 3', '2'
]
*/
const queryNum = parseInt(input[0]);
input.shift(); //2
let queries = queryNum;

let anItem = input[0].split(' ');
const nodes = parseInt(anItem[0]); //4
const edges = parseInt(anItem[1]); //2
input.shift(); //'4 2'
const edgeList = [];
let unreachable = (nodes - edges)/queries;
let count = 0;

while(queries > 0) {

    let outStr = '';
    for(let i=0; i < edges; i++) {
        let edge = input[0].split(' ');
        count = 0;
        edgeList.push(parseInt(edge[0]));
        edgeList.push(parseInt(edge[1]));
        outStr=outStr.concat('6 ');
        input.shift(); //1,2 1,3
    }
        let start = parseInt(input[0]);
        input.shift(); //1
        for(let item of edgeList) {
            if(item === start) count++;
        }
        if(count === 0) {
            outStr=outStr.concat('-1 ');
            unreachable--;
        }


    for(let j=0; j< unreachable; j++) {
        outStr=outStr.concat('-1 ');

    }
    console.log(outStr);
    outStr = '';
    queries--;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = "";

let currentLine = 0;

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  input = _input.split('\n');

    main();
});

function readLine() {
  return _input[currentLine++];
}

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//console.log('arr ' + parseInt(arr));
  processData(input);
}
