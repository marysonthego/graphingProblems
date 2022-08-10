/*
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]; //3

const explore = (grid, i, j, visited) => {
  if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 'W' || visited.has(`${i},${j}`)) return;

  visited.add(`${i},${j}`);
  explore(grid, i + 1, j, visited);
  explore(grid, i - 1, j, visited);
  explore(grid, i, j + 1, visited);
  explore(grid, i, j - 1, visited);
}

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 'L' && !visited.has(`${i},${j}`)) {
        explore(grid, i, j, visited);
        count++;
      }
    }
  }
  console.log(visited);
  return count;
}

console.log(islandCount(grid)); // -> 3
