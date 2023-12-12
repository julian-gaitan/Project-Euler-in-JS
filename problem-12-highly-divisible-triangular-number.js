
function divisibleTriangleNumber(n) {

  let sequence = 1, count = 1;
  while (n > findDivisors_f(sequence).length) {
    sequence += ++count;
  }
  return sequence;
}

function findDivisors_f(n) {
  let lowerDiv = [1];
  let upperDiv = [n];
  for (let i = 2; i < upperDiv[upperDiv.length-1]; i++) {
    if ((n % i) == 0) {
      lowerDiv.push(i);
      if (n/i > i) {
        upperDiv.push(n/i);
      }
    }
  }
  let divisors = [...lowerDiv, ...upperDiv.reverse()];
  return divisors;
}

console.log(divisibleTriangleNumber(500));