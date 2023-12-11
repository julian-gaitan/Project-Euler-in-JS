
let primes = [2, 3];

function nthPrime(n) {

  while (primes.length < n) {
    let number = primes[primes.length - 1] + 2;
    while (number != 0) {
      let i;
      for (i = 0; i < primes.length; i++) {
        if (number % primes[i] == 0) {
          break;
        }
      }
      if (primes.length == i) {
        primes.push(number);
        number = 0;
      } else {
        number += 2;
      }
    }
  }
  return primes[n-1];
}

console.log(nthPrime(10001));