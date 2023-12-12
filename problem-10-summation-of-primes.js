let primes = [2, 3];

function primeSummation(n) {

  while (primes[primes.length-1] < n) {
    let number = primes[primes.length - 1] + 2;
    while (number != 0) {
      let i, limit = Math.floor(Math.sqrt(number));
      for (i = 1; primes[i] <= limit; i++) {
        if (number % primes[i] == 0) {
          break;
        }
      }
      if (primes[i] > limit) {
        primes.push(number);
        number = 0;
      } else {
        number += 2;
      }
    }
  }
  primes.pop();
  return primes.reduce((acc, cur) => acc + cur, 0);
}

console.log(primeSummation(2e6));