var numIslands = function (grid) {
  let numberOfIslands = 0;
  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        numberOfIslands++;
        traverse(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return numberOfIslands;
};

// convert island to water
function traverse(row, col, grid) {
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === "0"
  )
    return;

  // convert island to water means make 1 to 0
  grid[row][col] = "0";
  traverse(row + 1, col, grid);
  traverse(row - 1, col, grid);
  traverse(row, col + 1, grid);
  traverse(row, col - 1, grid);
}

numIslands();
