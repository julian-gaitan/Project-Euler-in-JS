
let paths = [
    [{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:2}],
    [{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:2,y:2}],
    [{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:2}],
    [{x:0,y:1},{x:1,y:1},{x:1,y:2},{x:2,y:2}],
    [{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:2,y:2}],
    [{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2}]
  ];

function newPoint(x, y) {
    return {
        x: x,
        y: y
    };
}

function latticePaths(gridSize) {
    
    if (paths[0][paths[0].length-1].x < gridSize) {
        let size = paths[0][paths[0].length-1].x;
        let newPaths = [];
        for (const path of paths) {
            // let newPath = [];
            for (let point of path) {
                // newPath.push(point);
                if (point.x == size && point.y < size) {
                    let anotherPath = [point];
                    point = newPoint(point.x+1, point.y);
                    anotherPath.push(point);
                    while (point.y <= size) {
                        point = newPoint(point.x, point.y+1);
                        anotherPath.push(point);
                    }
                    newPaths.push(anotherPath);
                } else if (point.x < size && point.y == size) {
                    let anotherPath = [point];
                    point = newPoint(point.x, point.y+1);
                    anotherPath.push(point);
                    while (point.x <= size) {
                        point = newPoint(point.x+1, point.y);
                        anotherPath.push(point);
                    }
                    newPaths.push(anotherPath);
                } else if (point.x == size && point.y == size) {
                    let anotherPathA = [point];
                    let anotherPathB = [point];

                    anotherPathA.push(newPoint(point.x+1, point.y));
                    anotherPathA.push(newPoint(point.x+1, point.y+1));
                    newPaths.push(anotherPathA);
                    anotherPathB.push(newPoint(point.x, point.y+1));
                    anotherPathB.push(newPoint(point.x+1, point.y+1));                    
                    newPaths.push(anotherPathB);
                }
            }
        }
        paths = newPaths;
        return latticePaths(gridSize);
    } else {
        return paths.length;
    }
}
  
// latticePaths(9).forEach(arr => {
//     let line = "";
//     arr.forEach(obj => {
//         line += JSON.stringify(obj) + ", ";
//     });
//     console.log(line);
// });
// console.log(paths.length);
console.log(latticePaths(9));
  