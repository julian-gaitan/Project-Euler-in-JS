
function latticePaths(gridSize) {

    let triesLimit = Math.pow(gridSize, 4);
    let tries = 0;
    let paths = [];
    while (tries <= triesLimit) {
      let path = "";
      let x = 0, y = 0;
      while (x < gridSize || y < gridSize) {
        if (x == gridSize) {
          y++;
        } else if (y == gridSize) {
          x++;
        } else {
          if (Math.random() > 0.5) {
            x++;
          } else {
            y++;
          }
        }
        path += x+"-"+y+",";
      }
      if (paths.includes(path)) {
        tries++;
      } else {
        paths.push(path);
        tries = 0;
      }
    }
    return paths;
  }
  
  console.log(latticePaths(2));
  