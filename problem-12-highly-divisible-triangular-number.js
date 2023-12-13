
function divisibleTriangleNumber(n) {

  let sequence = 1, count = 1;
  while (n > findDivisors(sequence).length) {
    sequence += ++count;
  }
  return sequence;
}

function findDivisors(n) {
  let lowerDiv = [1];
  let upperDiv = [n];
  let limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if ((n % i) == 0) {
      lowerDiv.push(i);
      if (i < limit) {
        upperDiv.push(n/i);
      }
    }
  }
  let divisors = [...lowerDiv, ...upperDiv.reverse()];
  // console.log(n);
  // console.log(divisors);
  return divisors;
}

console.log(divisibleTriangleNumber(500));