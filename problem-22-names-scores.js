
const { readFile } = require('fs/promises');

async function content(path) {
  return await readFile(path, 'utf8');
}

content('./names.txt').then(txt => {
  let namesArr = txt.split(',');
  console.log(namesScores(namesArr));
});

function namesScores(arr) {

  const baseChar = "A".charCodeAt(0) - 1;
  arr.sort();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let score = 0;
    for (let j = 0; j < arr[i].length; j++) {
      score += arr[i].charCodeAt(j) - baseChar;
    }
    sum += (i + 1) * score;
  }
  return sum;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test1));
