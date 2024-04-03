
function latticePaths(gridSize) {

  let paths = Array(gridSize).fill(1);
  for (let order = 2; order <= gridSize; order++) {
    for (let i = 1; i < gridSize; i++) {
      paths[i] += paths[i - 1];
    }
  }
  return paths.reduce((pre, cur) => pre + cur, 0) * 2;
}

console.log(latticePaths(20));