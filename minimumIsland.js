/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];


const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if(!rowInbounds || !colInbounds || grid[r][c] === 'W' || visited.has(`${r},${c}`)) return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;

  visited.add(pos);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);
  return size;

}

const minimumIsland = (grid) => {
  let minSize = Infinity;
  const visited = new Set();

  for(let r=0; r<grid.length; r++) {
    for(let c=0; c<grid[0].length; c++) {
        const size = exploreSize(grid, r, c, visited);
        if(size > 0 && size < minSize) minSize = size;
    }
  }
  return minSize;
}
console.log(minimumIsland(grid)); // -> 2
