
function spiralDiagonals(n) {

  if (n % 2 == 0 || n < 3) {
    return -1;
  }
  n = (n - 1) / 2;
  let increment = 2, lastNum = 1, sum = 1;;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 4; j++) {
      lastNum += increment;
      sum += lastNum;
    }
    increment += 2;
  }
  return sum;
}

console.log(spiralDiagonals(1001));
